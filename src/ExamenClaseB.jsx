import { useState, useEffect, useRef } from "react";
import { questions } from "./questions.js";

const IMG_BASE = import.meta.env.BASE_URL + "images/";

// ----- Configuración del Examen Real (Dirección de Tránsito) -----
const EXAM_QUESTIONS = 35; // n° de preguntas del examen
const EXAM_DURATION_MIN = 60; // minutos disponibles
const EXAM_DOUBLE_COUNT = 5; // preguntas (al azar) que valen doble puntaje
const EXAM_MAX_ERROR_POINTS = 2; // puntos de error máximos para aprobar
const STORAGE_KEY = "cubitos_exam_history"; // historial de exámenes (localStorage)

const SESSION_OPTIONS = [
  { value: 15, label: "Rápida", desc: "15 preguntas" },
  { value: 30, label: "Media", desc: "30 preguntas" },
  { value: 50, label: "Larga", desc: "50 preguntas" },
  { value: questions.length, label: "Completa", desc: `Las ${questions.length}` },
];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function isAnswerCorrect(q, selected) {
  return (
    [...q.correct].sort().join(",") === [...(selected || [])].sort().join(",")
  );
}

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function persistHistory(h) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(h));
  } catch {
    /* localStorage no disponible */
  }
}

function computeStats(h) {
  const n = h.length;
  if (!n) return { n: 0 };
  const passed = h.filter((r) => r.passed).length;
  const pct = (r) => Math.round((r.correct / r.total) * 100);
  return {
    n,
    passed,
    passRate: Math.round((passed / n) * 100),
    bestPct: Math.max(...h.map(pct)),
    bestCorrect: Math.max(...h.map((r) => r.correct)),
    avgPct: Math.round(h.reduce((a, r) => a + pct(r), 0) / n),
    avgTimeSec: Math.round(h.reduce((a, r) => a + (r.usedSec || 0), 0) / n),
  };
}

function QuestionImages({ images, small = false }) {
  if (!images || images.length === 0) return null;
  return (
    <div className={`flex flex-wrap gap-2 ${small ? "mt-2" : "mt-4"}`}>
      {images.map((src) => (
        <img
          key={src}
          src={IMG_BASE + src}
          alt="Imagen de la pregunta"
          className={`rounded-lg bg-white object-contain border border-white/20 ${
            small ? "h-20" : "max-h-72 w-auto"
          }`}
          loading="lazy"
        />
      ))}
    </div>
  );
}

// Tarjeta de repaso usada en los resultados (estudio y examen)
function ReviewItem({ r }) {
  return (
    <div
      className={`rounded-xl p-4 border ${
        r.isCorrect
          ? "bg-green-500/10 border-green-500/30"
          : "bg-red-500/10 border-red-500/30"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-lg flex-shrink-0">{r.isCorrect ? "✅" : "❌"}</span>
        <div className="min-w-0">
          <p className="text-white text-sm font-medium">
            <span className="text-blue-300">#{r.q.id}</span> {r.q.question}
            {r.double && (
              <span className="ml-2 inline-block bg-fuchsia-500/20 text-fuchsia-300 text-[10px] font-bold px-2 py-0.5 rounded-full align-middle">
                ×2
              </span>
            )}
          </p>
          <QuestionImages images={r.q.images} small />
          <p className="text-green-400 text-xs mt-2">
            ✔ Correcta: {r.q.correct.map((c) => r.q.options[c]).join("  ·  ")}
          </p>
          {!r.isCorrect && (
            <p className="text-red-300 text-xs mt-1">
              ✘ Tu respuesta:{" "}
              {r.selected && r.selected.length
                ? r.selected.map((s) => r.q.options[s]).join("  ·  ")
                : "(sin responder)"}
            </p>
          )}
          {r.q.explanation && (
            <p className="text-blue-100/80 text-xs mt-2 leading-relaxed">
              💡 {r.q.explanation}
            </p>
          )}
          {!r.isCorrect &&
            r.q.wrongExplanations &&
            r.q.wrongExplanations.some((e) => e) && (
              <div className="mt-2 space-y-1">
                {r.q.wrongExplanations.map((exp, idx) =>
                  exp ? (
                    <p key={idx} className="text-red-100/70 text-xs leading-relaxed">
                      <span className="font-semibold text-red-300">
                        {String.fromCharCode(65 + idx)})
                      </span>{" "}
                      {exp}
                    </p>
                  ) : null
                )}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default function ExamenClaseB() {
  // modos: menu | study | results | exam | examResults
  const [mode, setMode] = useState("menu");

  // ---------- Estado modo ESTUDIO ----------
  const [sessionSize, setSessionSize] = useState(15);
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);

  // ---------- Estado modo EXAMEN ----------
  const [examQuestions, setExamQuestions] = useState([]);
  const [doubleSet, setDoubleSet] = useState(new Set()); // índices (0..34) con doble puntaje
  const [examAnswers, setExamAnswers] = useState({}); // idx -> [opciones]
  const [examIndex, setExamIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION_MIN * 60);
  const [examReport, setExamReport] = useState(null);
  const endTimeRef = useRef(null);

  // ---------- Historial / estadísticas ----------
  const [history, setHistory] = useState(() => loadHistory());
  const stats = computeStats(history);

  // ====================== ESTUDIO ======================
  const startSession = (size = sessionSize) => {
    const picked = shuffle(questions).slice(0, size);
    setSessionSize(size);
    setSessionQuestions(picked);
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setShowExplanation(false);
    setAnswered(false);
    setScore(0);
    setResults([]);
    setMode("study");
  };

  const currentQ = sessionQuestions[currentIndex];
  const isMulti = currentQ ? currentQ.correct.length > 1 : false;

  const toggleAnswer = (idx) => {
    if (answered) return;
    if (isMulti) {
      setSelectedAnswers((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      );
    } else {
      setSelectedAnswers([idx]);
    }
  };

  const checkAnswer = () => {
    setAnswered(true);
    setShowExplanation(true);
    const ok = isAnswerCorrect(currentQ, selectedAnswers);
    if (ok) setScore((prev) => prev + 1);
    setResults((prev) => [
      ...prev,
      { q: currentQ, selected: selectedAnswers, isCorrect: ok },
    ]);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 >= sessionQuestions.length) {
      setMode("results");
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswers([]);
      setShowExplanation(false);
      setAnswered(false);
    }
    window.scrollTo({ top: 0 });
  };

  const getOptionStyle = (idx) => {
    const isSelected = selectedAnswers.includes(idx);
    const isCorrect = currentQ?.correct.includes(idx);
    if (!answered) {
      return isSelected
        ? "border-2 border-blue-500 bg-blue-50 text-blue-900"
        : "border border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 cursor-pointer";
    }
    if (isCorrect) return "border-2 border-green-500 bg-green-50 text-green-900";
    if (isSelected && !isCorrect)
      return "border-2 border-red-400 bg-red-50 text-red-900";
    return "border border-gray-200 bg-gray-50 text-gray-500";
  };

  const progress =
    sessionQuestions.length > 0
      ? Math.round(
          ((currentIndex + (answered ? 1 : 0)) / sessionQuestions.length) * 100
        )
      : 0;

  // ====================== EXAMEN ======================
  const startExam = () => {
    const picked = shuffle(questions).slice(0, EXAM_QUESTIONS);
    // elegir EXAM_DOUBLE_COUNT posiciones al azar para doble puntaje
    const positions = shuffle([...Array(picked.length).keys()]).slice(
      0,
      EXAM_DOUBLE_COUNT
    );
    setExamQuestions(picked);
    setDoubleSet(new Set(positions));
    setExamAnswers({});
    setExamIndex(0);
    setTimeLeft(EXAM_DURATION_MIN * 60);
    setExamReport(null);
    endTimeRef.current = Date.now() + EXAM_DURATION_MIN * 60 * 1000;
    setMode("exam");
    window.scrollTo({ top: 0 });
  };

  // cronómetro: solo actualiza el tiempo restante
  useEffect(() => {
    if (mode !== "exam") return;
    const tick = () => {
      const remaining = Math.max(
        0,
        Math.round((endTimeRef.current - Date.now()) / 1000)
      );
      setTimeLeft(remaining);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [mode]);

  // auto-entrega al llegar a 0 (usa siempre las respuestas más recientes)
  useEffect(() => {
    if (mode === "exam" && timeLeft <= 0) finishExam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, mode]);

  const examQ = examQuestions[examIndex];
  const examIsMulti = examQ ? examQ.correct.length > 1 : false;

  const toggleExamAnswer = (idx) => {
    setExamAnswers((prev) => {
      const cur = prev[examIndex] || [];
      let next;
      if (examIsMulti) {
        next = cur.includes(idx)
          ? cur.filter((i) => i !== idx)
          : [...cur, idx];
      } else {
        next = [idx];
      }
      return { ...prev, [examIndex]: next };
    });
  };

  const finishExam = () => {
    const rows = examQuestions.map((q, i) => {
      const selected = examAnswers[i] || [];
      const ok = isAnswerCorrect(q, selected);
      const weight = doubleSet.has(i) ? 2 : 1;
      return { q, selected, isCorrect: ok, double: doubleSet.has(i), weight };
    });
    const totalPoints = rows.reduce((a, r) => a + r.weight, 0);
    const earned = rows.reduce((a, r) => a + (r.isCorrect ? r.weight : 0), 0);
    const errorPoints = rows.reduce(
      (a, r) => a + (r.isCorrect ? 0 : r.weight),
      0
    );
    const correctCount = rows.filter((r) => r.isCorrect).length;
    const answeredCount = rows.filter((r) => (r.selected || []).length).length;
    const passed = errorPoints <= EXAM_MAX_ERROR_POINTS;
    const usedSec = EXAM_DURATION_MIN * 60 - timeLeft;
    setExamReport({
      rows,
      totalPoints,
      earned,
      errorPoints,
      correctCount,
      answeredCount,
      passed,
      usedSec,
    });
    // guardar en el historial (localStorage)
    const record = {
      ts: Date.now(),
      passed,
      correct: correctCount,
      total: examQuestions.length,
      earned,
      totalPoints,
      errorPoints,
      usedSec,
    };
    const newHist = [record, ...history].slice(0, 100);
    setHistory(newHist);
    persistHistory(newHist);
    setMode("examResults");
    window.scrollTo({ top: 0 });
  };

  const clearHistory = () => {
    if (window.confirm("¿Borrar todo tu historial de exámenes? Esto no se puede deshacer.")) {
      setHistory([]);
      persistHistory([]);
    }
  };

  const fmt = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
      2,
      "0"
    )}`;

  // ====================== RENDER: MENU ======================
  if (mode === "menu") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-lg w-full text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">🚗</div>
            <h1 className="text-4xl font-bold text-white mb-2">Examen Clase B</h1>
            <p className="text-blue-300 text-lg">
              Cuestionario General de Conducción · Chile
            </p>
          </div>

          {/* Modo Examen Real */}
          <div className="bg-gradient-to-br from-fuchsia-600/20 to-blue-600/20 border border-fuchsia-400/30 rounded-2xl p-6 mb-6 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📝</span>
              <h2 className="text-white font-bold text-lg">Examen Real</h2>
            </div>
            <p className="text-blue-200 text-sm mb-3">
              Simulacro como en la Dirección de Tránsito:
            </p>
            <ul className="space-y-1 text-blue-200 text-sm mb-4">
              <li>🕐 {EXAM_QUESTIONS} preguntas en {EXAM_DURATION_MIN} minutos</li>
              <li>✖️ {EXAM_DOUBLE_COUNT} preguntas valen doble puntaje (×2)</li>
              <li>
                ✅ Apruebas con máximo {EXAM_MAX_ERROR_POINTS} puntos de error
              </li>
            </ul>
            <button
              onClick={startExam}
              className="w-full bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-fuchsia-500/25"
            >
              Rendir Examen Real
            </button>
          </div>

          {/* Modo Estudio */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📖</span>
              <h2 className="text-white font-bold text-lg">Modo Estudio</h2>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              Practica con explicación inmediata de cada respuesta (por qué es
              correcta y por qué no las otras).
            </p>
            <div className="grid grid-cols-2 gap-3">
              {SESSION_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => startSession(opt.value)}
                  className="bg-white/10 hover:bg-blue-500 border border-white/15 hover:border-blue-400 text-white rounded-xl py-3 px-4 transition-all duration-200 group"
                >
                  <div className="text-base font-bold">{opt.label}</div>
                  <div className="text-blue-300 group-hover:text-blue-100 text-xs">
                    {opt.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Mis estadísticas */}
          <button
            onClick={() => setMode("stats")}
            className="w-full mt-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl p-4 flex items-center justify-between transition-all"
          >
            <span className="flex items-center gap-2 font-semibold">
              <span className="text-xl">📊</span> Mis estadísticas
            </span>
            <span className="text-blue-300 text-sm">
              {stats.n > 0
                ? `${stats.n} ${stats.n === 1 ? "examen" : "exámenes"} · ${stats.passed} aprob.`
                : "Aún sin datos →"}
            </span>
          </button>

          <p className="text-blue-400 text-sm mt-6">
            {questions.length} preguntas disponibles con explicaciones completas
          </p>
        </div>
      </div>
    );
  }

  // ====================== RENDER: ESTADÍSTICAS ======================
  if (mode === "stats") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-4">
        <div className="max-w-2xl mx-auto py-8">
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">📊</div>
            <h1 className="text-3xl font-bold text-white mb-1">Mis estadísticas</h1>
            <p className="text-blue-300">Tu progreso en el Examen Real</p>
          </div>

          {stats.n === 0 ? (
            <div className="bg-white/10 rounded-2xl p-8 text-center mb-6">
              <p className="text-blue-200">
                Todavía no has rendido ningún Examen Real. ¡Rinde el primero y
                aquí verás tu progreso!
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">{stats.n}</div>
                  <div className="text-blue-300 text-xs">Exámenes</div>
                </div>
                <div className="bg-green-500/15 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {stats.passRate}%
                  </div>
                  <div className="text-blue-300 text-xs">
                    Aprobados ({stats.passed})
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">
                    {stats.bestCorrect}/{EXAM_QUESTIONS}
                  </div>
                  <div className="text-blue-300 text-xs">Mejor resultado</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">
                    {fmt(stats.avgTimeSec)}
                  </div>
                  <div className="text-blue-300 text-xs">Tiempo prom.</div>
                </div>
              </div>

              <h2 className="text-white font-semibold mb-3">Historial</h2>
              <div className="space-y-2 mb-6">
                {history.map((r, i) => (
                  <div
                    key={r.ts + "-" + i}
                    className={`rounded-xl p-3 border flex items-center justify-between ${
                      r.passed
                        ? "bg-green-500/10 border-green-500/30"
                        : "bg-red-500/10 border-red-500/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{r.passed ? "✅" : "❌"}</span>
                      <div>
                        <div className="text-white text-sm font-medium">
                          {r.passed ? "Aprobado" : "Reprobado"} · {r.correct}/
                          {r.total} correctas
                        </div>
                        <div className="text-blue-300 text-xs">
                          {new Date(r.ts).toLocaleDateString("es-CL")}{" "}
                          {new Date(r.ts).toLocaleTimeString("es-CL", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}{" "}
                          · {r.errorPoints} pts error · {fmt(r.usedSec)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={clearHistory}
                className="w-full mb-3 bg-red-500/10 hover:bg-red-500/20 text-red-300 font-semibold py-3 rounded-xl transition-all border border-red-500/20"
              >
                Borrar historial
              </button>
            </>
          )}

          <button
            onClick={() => setMode("menu")}
            className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl transition-all"
          >
            ← Volver al menú
          </button>
        </div>
      </div>
    );
  }

  // ====================== RENDER: EXAMEN (rindiendo) ======================
  if (mode === "exam") {
    const lowTime = timeLeft <= 5 * 60;
    const selected = examAnswers[examIndex] || [];
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-4">
        <div className="max-w-2xl mx-auto py-6">
          {/* Barra superior: progreso + cronómetro */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-blue-300 text-sm font-medium">
              Pregunta {examIndex + 1} de {examQuestions.length}
            </span>
            <span
              className={`font-mono text-lg font-bold px-3 py-1 rounded-lg ${
                lowTime
                  ? "bg-red-500/20 text-red-300 animate-pulse"
                  : "bg-white/10 text-white"
              }`}
            >
              🕐 {fmt(timeLeft)}
            </span>
          </div>

          {/* Mapa de preguntas */}
          <div className="grid grid-cols-10 gap-1.5 mb-5">
            {examQuestions.map((_, i) => {
              const ans = (examAnswers[i] || []).length > 0;
              const isCur = i === examIndex;
              const dbl = doubleSet.has(i);
              return (
                <button
                  key={i}
                  onClick={() => {
                    setExamIndex(i);
                    window.scrollTo({ top: 0 });
                  }}
                  className={`relative h-8 rounded text-xs font-semibold transition-all ${
                    isCur
                      ? "bg-blue-400 text-white ring-2 ring-white"
                      : ans
                      ? "bg-blue-600/70 text-white"
                      : "bg-white/10 text-blue-200 hover:bg-white/20"
                  }`}
                  title={`Pregunta ${i + 1}${dbl ? " (×2)" : ""}`}
                >
                  {i + 1}
                  {dbl && (
                    <span className="absolute -top-1 -right-1 text-[9px] bg-fuchsia-500 text-white rounded-full px-1 leading-tight">
                      ×2
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Tarjeta pregunta */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {examIsMulti && (
                <span className="inline-block bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full">
                  Selecciona {examQ.correct.length} respuestas
                </span>
              )}
              {doubleSet.has(examIndex) && (
                <span className="inline-block bg-fuchsia-500/20 text-fuchsia-300 text-xs font-bold px-3 py-1 rounded-full">
                  Doble puntaje ×2
                </span>
              )}
            </div>
            <p className="text-white text-lg font-medium leading-relaxed">
              <span className="text-blue-300">#{examQ.id}.</span> {examQ.question}
            </p>
            <QuestionImages images={examQ.images} />
          </div>

          {/* Opciones (sin feedback) */}
          <div className="space-y-3 mb-5">
            {examQ.options.map((opt, idx) => {
              const sel = selected.includes(idx);
              return (
                <button
                  key={idx}
                  onClick={() => toggleExamAnswer(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                    sel
                      ? "border-2 border-blue-500 bg-blue-50 text-blue-900"
                      : "border border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 cursor-pointer"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-sm flex-shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)})
                    </span>
                    <span className="text-sm leading-relaxed">{opt}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navegación */}
          <div className="flex gap-3 mb-3">
            <button
              onClick={() => {
                setExamIndex((i) => Math.max(0, i - 1));
                window.scrollTo({ top: 0 });
              }}
              disabled={examIndex === 0}
              className="flex-1 py-3 rounded-xl font-semibold bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              ← Anterior
            </button>
            {examIndex + 1 < examQuestions.length ? (
              <button
                onClick={() => {
                  setExamIndex((i) => i + 1);
                  window.scrollTo({ top: 0 });
                }}
                className="flex-1 py-3 rounded-xl font-semibold bg-blue-500 text-white hover:bg-blue-400 transition-all"
              >
                Siguiente →
              </button>
            ) : (
              <button
                onClick={() => {
                  if (
                    window.confirm(
                      "¿Terminar el examen y ver tu resultado? No podrás cambiar tus respuestas."
                    )
                  )
                    finishExam();
                }}
                className="flex-1 py-3 rounded-xl font-bold bg-green-500 text-white hover:bg-green-400 transition-all"
              >
                Finalizar ✓
              </button>
            )}
          </div>

          <button
            onClick={() => {
              const faltan = examQuestions.filter(
                (_, i) => (examAnswers[i] || []).length === 0
              ).length;
              const msg =
                faltan > 0
                  ? `Te faltan ${faltan} preguntas por responder (contarán como incorrectas). ¿Terminar de todas formas?`
                  : "¿Terminar el examen y ver tu resultado?";
              if (window.confirm(msg)) finishExam();
            }}
            className="w-full py-2 text-blue-300/70 hover:text-white text-sm underline"
          >
            Finalizar examen ahora
          </button>
        </div>
      </div>
    );
  }

  // ====================== RENDER: RESULTADO EXAMEN ======================
  if (mode === "examResults" && examReport) {
    const {
      rows,
      totalPoints,
      earned,
      errorPoints,
      correctCount,
      passed,
      usedSec,
    } = examReport;
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-4">
        <div className="max-w-2xl mx-auto py-8">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">{passed ? "🎉" : "😔"}</div>
            <h1
              className={`text-4xl font-extrabold mb-1 ${
                passed ? "text-green-400" : "text-red-400"
              }`}
            >
              {passed ? "APROBADO" : "REPROBADO"}
            </h1>
            <p className="text-blue-300">
              {passed
                ? "¡Felicitaciones! Cumpliste el estándar del examen."
                : `Necesitas máximo ${EXAM_MAX_ERROR_POINTS} puntos de error para aprobar.`}
            </p>
          </div>

          {/* Resumen */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">
                {correctCount}/{examQuestions.length}
              </div>
              <div className="text-blue-300 text-xs">Correctas</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">
                {earned}/{totalPoints}
              </div>
              <div className="text-blue-300 text-xs">Puntaje</div>
            </div>
            <div
              className={`rounded-xl p-4 text-center ${
                errorPoints <= EXAM_MAX_ERROR_POINTS
                  ? "bg-green-500/15"
                  : "bg-red-500/15"
              }`}
            >
              <div
                className={`text-2xl font-bold ${
                  errorPoints <= EXAM_MAX_ERROR_POINTS
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {errorPoints}
              </div>
              <div className="text-blue-300 text-xs">Puntos de error</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{fmt(usedSec)}</div>
              <div className="text-blue-300 text-xs">Tiempo usado</div>
            </div>
          </div>

          <p className="text-center text-blue-300 text-sm mb-6">
            Llevas {stats.n} {stats.n === 1 ? "examen" : "exámenes"} rendidos ·{" "}
            {stats.passed} aprobados ·{" "}
            <button
              onClick={() => setMode("stats")}
              className="underline hover:text-white"
            >
              ver estadísticas
            </button>
          </p>

          <h2 className="text-white font-semibold mb-3">
            Revisión completa (aprende de cada una)
          </h2>
          <div className="space-y-3 mb-6">
            {rows.map((r, i) => (
              <ReviewItem key={i} r={r} />
            ))}
          </div>

          <button
            onClick={startExam}
            className="w-full bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all"
          >
            Rendir otro examen
          </button>
          <button
            onClick={() => setMode("menu")}
            className="w-full mt-3 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl transition-all"
          >
            Menú Principal
          </button>
        </div>
      </div>
    );
  }

  // ====================== RENDER: RESULTADO ESTUDIO ======================
  if (mode === "results") {
    const pct = Math.round((score / sessionQuestions.length) * 100);
    const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚";
    const msg =
      pct >= 80
        ? "¡Excelente dominio!"
        : pct >= 60
        ? "Buen avance, sigue practicando"
        : "Necesitas más práctica";

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-4">
        <div className="max-w-2xl mx-auto py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{emoji}</div>
            <h1 className="text-3xl font-bold text-white mb-2">Resultado Final</h1>
            <p className="text-blue-300">{msg}</p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-6 text-center">
            <div className="text-6xl font-bold text-white mb-2">{pct}%</div>
            <div className="text-blue-300">
              {score} de {sessionQuestions.length} correctas
            </div>
            <div className="mt-4 bg-white/10 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all"
                style={{
                  width: `${pct}%`,
                  background:
                    pct >= 80 ? "#22c55e" : pct >= 60 ? "#eab308" : "#ef4444",
                }}
              />
            </div>
          </div>

          <h2 className="text-white font-semibold mb-3">Repaso de la práctica</h2>
          <div className="space-y-3 mb-6">
            {results.map((r, i) => (
              <ReviewItem key={i} r={r} />
            ))}
          </div>

          <button
            onClick={() => startSession(sessionSize)}
            className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all"
          >
            Nueva Práctica
          </button>
          <button
            onClick={() => setMode("menu")}
            className="w-full mt-3 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl transition-all"
          >
            Menú Principal
          </button>
        </div>
      </div>
    );
  }

  // ====================== RENDER: ESTUDIO ======================
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-4">
      <div className="max-w-2xl mx-auto py-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-300 text-sm font-medium">
            Pregunta {currentIndex + 1} de {sessionQuestions.length}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-blue-300 text-sm">✅ {score} correctas</span>
            <button
              onClick={() => setMode("menu")}
              className="text-blue-300/70 hover:text-white text-xs underline"
            >
              Salir
            </button>
          </div>
        </div>

        <div className="bg-white/10 rounded-full h-2 mb-6">
          <div
            className="h-2 rounded-full bg-blue-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4">
          {isMulti && (
            <div className="inline-block bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Selecciona {currentQ.correct.length} respuestas
            </div>
          )}
          <p className="text-white text-lg font-medium leading-relaxed">
            <span className="text-blue-300">#{currentQ.id}.</span>{" "}
            {currentQ.question}
          </p>
          <QuestionImages images={currentQ.images} />
        </div>

        <div className="space-y-3 mb-4">
          {currentQ.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => toggleAnswer(idx)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${getOptionStyle(
                idx
              )}`}
            >
              <div className="flex items-start gap-3">
                <span className="font-bold text-sm flex-shrink-0 mt-0.5">
                  {String.fromCharCode(65 + idx)})
                </span>
                <span className="text-sm leading-relaxed">{opt}</span>
                {answered && currentQ.correct.includes(idx) && (
                  <span className="ml-auto flex-shrink-0">✅</span>
                )}
                {answered &&
                  selectedAnswers.includes(idx) &&
                  !currentQ.correct.includes(idx) && (
                    <span className="ml-auto flex-shrink-0">❌</span>
                  )}
              </div>
            </button>
          ))}
        </div>

        {!answered && (
          <button
            onClick={checkAnswer}
            disabled={selectedAnswers.length === 0}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
              selectedAnswers.length > 0
                ? "bg-blue-500 hover:bg-blue-400 text-white shadow-lg"
                : "bg-white/10 text-white/40 cursor-not-allowed"
            }`}
          >
            Verificar Respuesta
          </button>
        )}

        {showExplanation && (
          <div className="mt-4 space-y-3">
            <div className="bg-green-500/15 border border-green-500/30 rounded-xl p-4">
              <h3 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                <span>💡</span> ¿Por qué es correcta?
              </h3>
              <p className="text-green-100 text-sm leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>

            {currentQ.wrongExplanations &&
              currentQ.wrongExplanations.some((e) => e) && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <h3 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                    <span>❌</span> ¿Por qué no las otras?
                  </h3>
                  <div className="space-y-2">
                    {currentQ.wrongExplanations.map((exp, idx) =>
                      exp ? (
                        <div
                          key={idx}
                          className="text-red-100 text-sm leading-relaxed"
                        >
                          <span className="font-semibold text-red-300">
                            Opción {String.fromCharCode(65 + idx)}):
                          </span>{" "}
                          {exp}
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              )}

            <button
              onClick={nextQuestion}
              className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 rounded-xl text-lg transition-all"
            >
              {currentIndex + 1 >= sessionQuestions.length
                ? "Ver Resultados 📊"
                : "Siguiente Pregunta →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
