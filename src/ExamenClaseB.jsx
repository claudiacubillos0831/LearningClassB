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

const PAGE_BG =
  "min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50";

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
          className={`rounded-lg bg-white object-contain border border-stone-200 ${
            small ? "h-20" : "max-h-72 w-auto"
          }`}
          loading="lazy"
        />
      ))}
    </div>
  );
}

// Tarjeta de repaso usada en los resultados (estudio y examen)
function ReviewItem({ r, idAttr }) {
  return (
    <div
      id={idAttr}
      className={`scroll-mt-4 rounded-xl p-4 border ${
        r.isCorrect
          ? "bg-emerald-50 border-emerald-200"
          : "bg-rose-50 border-rose-200"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-lg flex-shrink-0">{r.isCorrect ? "✅" : "❌"}</span>
        <div className="min-w-0">
          <p className="text-stone-800 text-sm font-medium">
            <span className="text-amber-700">#{r.q.id}</span> {r.q.question}
            {r.double && (
              <span className="ml-2 inline-block bg-violet-100 text-violet-600 text-[10px] font-bold px-2 py-0.5 rounded-full align-middle">
                ×2
              </span>
            )}
          </p>
          <QuestionImages images={r.q.images} small />
          <p className="text-emerald-700 text-xs mt-2">
            ✔ Correcta: {r.q.correct.map((c) => r.q.options[c]).join("  ·  ")}
          </p>
          {!r.isCorrect && (
            <p className="text-rose-600 text-xs mt-1">
              ✘ Tu respuesta:{" "}
              {r.selected && r.selected.length
                ? r.selected.map((s) => r.q.options[s]).join("  ·  ")
                : "(sin responder)"}
            </p>
          )}
          {r.q.explanation && (
            <p className="text-stone-600 text-xs mt-2 leading-relaxed">
              💡 {r.q.explanation}
            </p>
          )}
          {!r.isCorrect &&
            r.q.wrongExplanations &&
            r.q.wrongExplanations.some((e) => e) && (
              <div className="mt-2 space-y-1">
                {r.q.wrongExplanations.map((exp, idx) =>
                  exp ? (
                    <p key={idx} className="text-rose-500 text-xs leading-relaxed">
                      <span className="font-semibold text-rose-600">
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

// Panel de navegación por pregunta (para saltar rápido en la revisión)
function ReviewNav({ rows, prefix }) {
  const jump = (i) => {
    const el = document.getElementById(`${prefix}-${i}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="bg-white/70 backdrop-blur border border-stone-200 rounded-2xl p-4 mb-4">
      <p className="text-stone-500 text-xs mb-2 font-medium">
        Salta a una pregunta:
      </p>
      <div className="grid grid-cols-8 sm:grid-cols-10 gap-1.5">
        {rows.map((r, i) => (
          <button
            key={i}
            onClick={() => jump(i)}
            title={`Pregunta ${i + 1}${r.double ? " (×2)" : ""} — ${
              r.isCorrect ? "correcta" : "incorrecta"
            }`}
            className={`relative h-8 rounded-lg text-xs font-bold transition-all ${
              r.isCorrect
                ? "bg-emerald-200 text-emerald-800 hover:bg-emerald-300"
                : "bg-rose-200 text-rose-700 hover:bg-rose-300"
            }`}
          >
            {i + 1}
            {r.double && (
              <span className="absolute -top-1 -right-1 text-[8px] bg-violet-500 text-white rounded-full px-1 leading-tight">
                ×2
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ExamenClaseB() {
  // modos: menu | study | results | exam | examResults | stats
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
  const [doubleSet, setDoubleSet] = useState(new Set());
  const [examAnswers, setExamAnswers] = useState({});
  const [examIndex, setExamIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION_MIN * 60);
  const [examReport, setExamReport] = useState(null);
  const [showFinishModal, setShowFinishModal] = useState(false);
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
        ? "border-2 border-sky-400 bg-sky-50 text-sky-900"
        : "border border-stone-200 bg-white hover:border-amber-300 hover:bg-amber-50 cursor-pointer text-stone-700";
    }
    if (isCorrect)
      return "border-2 border-emerald-400 bg-emerald-50 text-emerald-900";
    if (isSelected && !isCorrect)
      return "border-2 border-rose-300 bg-rose-50 text-rose-900";
    return "border border-stone-200 bg-stone-50 text-stone-400";
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
    setShowFinishModal(false);
    endTimeRef.current = Date.now() + EXAM_DURATION_MIN * 60 * 1000;
    setMode("exam");
    window.scrollTo({ top: 0 });
  };

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
        next = cur.includes(idx) ? cur.filter((i) => i !== idx) : [...cur, idx];
      } else {
        next = [idx];
      }
      return { ...prev, [examIndex]: next };
    });
  };

  const finishExam = () => {
    setShowFinishModal(false);
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
    if (
      window.confirm(
        "¿Borrar todo tu historial de exámenes? Esto no se puede deshacer."
      )
    ) {
      setHistory([]);
      persistHistory([]);
    }
  };

  const fmt = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
      2,
      "0"
    )}`;

  const unansweredCount = examQuestions.filter(
    (_, i) => (examAnswers[i] || []).length === 0
  ).length;

  // ====================== RENDER: MENU ======================
  if (mode === "menu") {
    return (
      <div className={`${PAGE_BG} flex items-center justify-center p-4`}>
        <div className="max-w-lg w-full text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">🧊</div>
            <h1 className="text-4xl font-bold text-stone-800 mb-2">
              Examen Clase B
            </h1>
            <p className="text-amber-700 text-lg">
              Cuestionario General de Conducción · Chile
            </p>
          </div>

          {/* Modo Examen Real */}
          <div className="bg-gradient-to-br from-amber-100 to-rose-100 border border-amber-200 rounded-2xl p-6 mb-6 text-left shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📝</span>
              <h2 className="text-stone-800 font-bold text-lg">Examen Real</h2>
            </div>
            <p className="text-stone-600 text-sm mb-3">
              Simulacro como en la Dirección de Tránsito:
            </p>
            <ul className="space-y-1 text-stone-600 text-sm mb-4">
              <li>🕐 {EXAM_QUESTIONS} preguntas en {EXAM_DURATION_MIN} minutos</li>
              <li>✖️ {EXAM_DOUBLE_COUNT} preguntas valen doble puntaje (×2)</li>
              <li>
                ✅ Apruebas con máximo {EXAM_MAX_ERROR_POINTS} puntos de error
              </li>
            </ul>
            <button
              onClick={startExam}
              className="w-full bg-amber-400 hover:bg-amber-300 text-stone-800 font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-sm"
            >
              Rendir Examen Real
            </button>
          </div>

          {/* Modo Estudio */}
          <div className="bg-white/70 backdrop-blur border border-stone-200 rounded-2xl p-6 text-left shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📖</span>
              <h2 className="text-stone-800 font-bold text-lg">Modo Estudio</h2>
            </div>
            <p className="text-stone-600 text-sm mb-4">
              Practica con explicación inmediata de cada respuesta (por qué es
              correcta y por qué no las otras).
            </p>
            <div className="grid grid-cols-2 gap-3">
              {SESSION_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => startSession(opt.value)}
                  className="bg-amber-50 hover:bg-amber-200 border border-stone-200 text-stone-700 rounded-xl py-3 px-4 transition-all duration-200"
                >
                  <div className="text-base font-bold">{opt.label}</div>
                  <div className="text-stone-500 text-xs">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Mis estadísticas */}
          <button
            onClick={() => setMode("stats")}
            className="w-full mt-4 bg-white/60 hover:bg-white border border-stone-200 text-stone-700 rounded-2xl p-4 flex items-center justify-between transition-all shadow-sm"
          >
            <span className="flex items-center gap-2 font-semibold">
              <span className="text-xl">📊</span> Mis estadísticas
            </span>
            <span className="text-stone-500 text-sm">
              {stats.n > 0
                ? `${stats.n} ${stats.n === 1 ? "examen" : "exámenes"} · ${stats.passed} aprob.`
                : "Aún sin datos →"}
            </span>
          </button>

          <p className="text-stone-400 text-sm mt-6">
            {questions.length} preguntas disponibles con explicaciones completas
          </p>
        </div>
      </div>
    );
  }

  // ====================== RENDER: ESTADÍSTICAS ======================
  if (mode === "stats") {
    return (
      <div className={`${PAGE_BG} p-4`}>
        <div className="max-w-2xl mx-auto py-8">
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">📊</div>
            <h1 className="text-3xl font-bold text-stone-800 mb-1">
              Mis estadísticas
            </h1>
            <p className="text-amber-700">Tu progreso en el Examen Real</p>
          </div>

          {stats.n === 0 ? (
            <div className="bg-white/70 border border-stone-200 rounded-2xl p-8 text-center mb-6">
              <p className="text-stone-600">
                Todavía no has rendido ningún Examen Real. ¡Rinde el primero y
                aquí verás tu progreso!
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-white/70 border border-stone-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-stone-800">
                    {stats.n}
                  </div>
                  <div className="text-stone-500 text-xs">Exámenes</div>
                </div>
                <div className="bg-emerald-100 border border-emerald-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-600">
                    {stats.passRate}%
                  </div>
                  <div className="text-stone-500 text-xs">
                    Aprobados ({stats.passed})
                  </div>
                </div>
                <div className="bg-white/70 border border-stone-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-stone-800">
                    {stats.bestCorrect}/{EXAM_QUESTIONS}
                  </div>
                  <div className="text-stone-500 text-xs">Mejor resultado</div>
                </div>
                <div className="bg-white/70 border border-stone-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-stone-800">
                    {fmt(stats.avgTimeSec)}
                  </div>
                  <div className="text-stone-500 text-xs">Tiempo prom.</div>
                </div>
              </div>

              <h2 className="text-stone-800 font-semibold mb-3">Historial</h2>
              <div className="space-y-2 mb-6">
                {history.map((r, i) => (
                  <div
                    key={r.ts + "-" + i}
                    className={`rounded-xl p-3 border flex items-center justify-between ${
                      r.passed
                        ? "bg-emerald-50 border-emerald-200"
                        : "bg-rose-50 border-rose-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{r.passed ? "✅" : "❌"}</span>
                      <div>
                        <div className="text-stone-800 text-sm font-medium">
                          {r.passed ? "Aprobado" : "Reprobado"} · {r.correct}/
                          {r.total} correctas
                        </div>
                        <div className="text-stone-500 text-xs">
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
                className="w-full mb-3 bg-rose-50 hover:bg-rose-100 text-rose-500 font-semibold py-3 rounded-xl transition-all border border-rose-200"
              >
                Borrar historial
              </button>
            </>
          )}

          <button
            onClick={() => setMode("menu")}
            className="w-full bg-white/70 hover:bg-white border border-stone-200 text-stone-700 font-semibold py-3 px-8 rounded-xl transition-all"
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
      <div className={`${PAGE_BG} p-4`}>
        <div className="max-w-2xl mx-auto py-6">
          {/* Barra superior: progreso + cronómetro */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-stone-500 text-sm font-medium">
              Pregunta {examIndex + 1} de {examQuestions.length}
            </span>
            <span
              className={`font-mono text-lg font-bold px-3 py-1 rounded-lg border ${
                lowTime
                  ? "bg-rose-100 text-rose-600 border-rose-200 animate-pulse"
                  : "bg-white text-stone-700 border-stone-200"
              }`}
            >
              🕐 {fmt(timeLeft)}
            </span>
          </div>

          {/* Mapa de preguntas (búsqueda rápida) */}
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
                  className={`relative h-8 rounded-lg text-xs font-semibold transition-all border ${
                    isCur
                      ? "bg-amber-400 text-white border-amber-400 ring-2 ring-amber-200"
                      : ans
                      ? "bg-amber-200 text-stone-700 border-amber-200"
                      : "bg-white text-stone-400 border-stone-200 hover:bg-amber-50"
                  }`}
                  title={`Pregunta ${i + 1}${dbl ? " (×2)" : ""}`}
                >
                  {i + 1}
                  {dbl && (
                    <span className="absolute -top-1 -right-1 text-[9px] bg-violet-500 text-white rounded-full px-1 leading-tight">
                      ×2
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Tarjeta pregunta */}
          <div className="bg-white/70 backdrop-blur border border-stone-200 rounded-2xl p-6 mb-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {examIsMulti && (
                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Selecciona {examQ.correct.length} respuestas
                </span>
              )}
              {doubleSet.has(examIndex) && (
                <span className="inline-block bg-violet-100 text-violet-600 text-xs font-bold px-3 py-1 rounded-full">
                  Doble puntaje ×2
                </span>
              )}
            </div>
            <p className="text-stone-800 text-lg font-medium leading-relaxed">
              <span className="text-amber-700">#{examQ.id}.</span> {examQ.question}
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
                      ? "border-2 border-sky-400 bg-sky-50 text-sky-900"
                      : "border border-stone-200 bg-white hover:border-amber-300 hover:bg-amber-50 cursor-pointer text-stone-700"
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
              className="flex-1 py-3 rounded-xl font-semibold bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              ← Anterior
            </button>
            {examIndex + 1 < examQuestions.length ? (
              <button
                onClick={() => {
                  setExamIndex((i) => i + 1);
                  window.scrollTo({ top: 0 });
                }}
                className="flex-1 py-3 rounded-xl font-semibold bg-amber-400 text-stone-800 hover:bg-amber-300 transition-all"
              >
                Siguiente →
              </button>
            ) : (
              <button
                onClick={() => setShowFinishModal(true)}
                className="flex-1 py-3 rounded-xl font-bold bg-emerald-500 text-white hover:bg-emerald-400 transition-all"
              >
                Finalizar ✓
              </button>
            )}
          </div>

          <button
            onClick={() => setShowFinishModal(true)}
            className="w-full py-2 text-stone-400 hover:text-stone-600 text-sm underline"
          >
            Finalizar examen ahora
          </button>
        </div>

        {/* MODAL de entrega */}
        {showFinishModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm"
            onClick={() => setShowFinishModal(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-xl border border-stone-200 max-w-sm w-full p-6 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-4xl mb-3">📤</div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">
                ¿Entregar el examen?
              </h3>
              {unansweredCount > 0 ? (
                <p className="text-stone-600 text-sm mb-1">
                  Te faltan{" "}
                  <span className="font-bold text-rose-500">
                    {unansweredCount}
                  </span>{" "}
                  {unansweredCount === 1 ? "pregunta" : "preguntas"} por
                  responder.
                </p>
              ) : (
                <p className="text-stone-600 text-sm mb-1">
                  Respondiste todas las preguntas. 🎉
                </p>
              )}
              <p className="text-stone-400 text-xs mb-5">
                Las no respondidas cuentan como incorrectas. No podrás cambiar
                tus respuestas después.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowFinishModal(false)}
                  className="flex-1 py-3 rounded-xl font-semibold bg-stone-100 text-stone-600 hover:bg-stone-200 transition-all"
                >
                  Seguir
                </button>
                <button
                  onClick={finishExam}
                  className="flex-1 py-3 rounded-xl font-bold bg-emerald-500 text-white hover:bg-emerald-400 transition-all"
                >
                  Entregar
                </button>
              </div>
            </div>
          </div>
        )}
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
      <div className={`${PAGE_BG} p-4`}>
        <div className="max-w-2xl mx-auto py-8">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">{passed ? "🎉" : "😔"}</div>
            <h1
              className={`text-4xl font-extrabold mb-1 ${
                passed ? "text-emerald-600" : "text-rose-500"
              }`}
            >
              {passed ? "APROBADO" : "REPROBADO"}
            </h1>
            <p className="text-stone-600">
              {passed
                ? "¡Felicitaciones! Cumpliste el estándar del examen."
                : `Necesitas máximo ${EXAM_MAX_ERROR_POINTS} puntos de error para aprobar.`}
            </p>
          </div>

          {/* Resumen */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <div className="bg-white/70 border border-stone-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-stone-800">
                {correctCount}/{examQuestions.length}
              </div>
              <div className="text-stone-500 text-xs">Correctas</div>
            </div>
            <div className="bg-white/70 border border-stone-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-stone-800">
                {earned}/{totalPoints}
              </div>
              <div className="text-stone-500 text-xs">Puntaje</div>
            </div>
            <div
              className={`rounded-xl p-4 text-center border ${
                errorPoints <= EXAM_MAX_ERROR_POINTS
                  ? "bg-emerald-50 border-emerald-200"
                  : "bg-rose-50 border-rose-200"
              }`}
            >
              <div
                className={`text-2xl font-bold ${
                  errorPoints <= EXAM_MAX_ERROR_POINTS
                    ? "text-emerald-600"
                    : "text-rose-500"
                }`}
              >
                {errorPoints}
              </div>
              <div className="text-stone-500 text-xs">Puntos de error</div>
            </div>
            <div className="bg-white/70 border border-stone-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-stone-800">
                {fmt(usedSec)}
              </div>
              <div className="text-stone-500 text-xs">Tiempo usado</div>
            </div>
          </div>

          <p className="text-center text-stone-500 text-sm mb-6">
            Llevas {stats.n} {stats.n === 1 ? "examen" : "exámenes"} rendidos ·{" "}
            {stats.passed} aprobados ·{" "}
            <button
              onClick={() => setMode("stats")}
              className="underline hover:text-stone-800"
            >
              ver estadísticas
            </button>
          </p>

          <h2 className="text-stone-800 font-semibold mb-3">
            Revisión por pregunta
          </h2>
          {/* Panel de navegación rápida por pregunta */}
          <ReviewNav rows={rows} prefix="exrev" />

          <div className="space-y-3 mb-6">
            {rows.map((r, i) => (
              <ReviewItem key={i} r={r} idAttr={`exrev-${i}`} />
            ))}
          </div>

          <button
            onClick={startExam}
            className="w-full bg-amber-400 hover:bg-amber-300 text-stone-800 font-bold py-4 px-8 rounded-xl text-xl transition-all"
          >
            Rendir otro examen
          </button>
          <button
            onClick={() => setMode("menu")}
            className="w-full mt-3 bg-white/70 hover:bg-white border border-stone-200 text-stone-700 font-semibold py-3 px-8 rounded-xl transition-all"
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
      <div className={`${PAGE_BG} p-4`}>
        <div className="max-w-2xl mx-auto py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{emoji}</div>
            <h1 className="text-3xl font-bold text-stone-800 mb-2">
              Resultado Final
            </h1>
            <p className="text-stone-600">{msg}</p>
          </div>

          <div className="bg-white/70 border border-stone-200 rounded-2xl p-6 mb-6 text-center shadow-sm">
            <div className="text-6xl font-bold text-stone-800 mb-2">{pct}%</div>
            <div className="text-stone-500">
              {score} de {sessionQuestions.length} correctas
            </div>
            <div className="mt-4 bg-stone-200 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all"
                style={{
                  width: `${pct}%`,
                  background:
                    pct >= 80 ? "#34d399" : pct >= 60 ? "#fbbf24" : "#fb7185",
                }}
              />
            </div>
          </div>

          <h2 className="text-stone-800 font-semibold mb-3">
            Repaso de la práctica
          </h2>
          <ReviewNav rows={results} prefix="strev" />
          <div className="space-y-3 mb-6">
            {results.map((r, i) => (
              <ReviewItem key={i} r={r} idAttr={`strev-${i}`} />
            ))}
          </div>

          <button
            onClick={() => startSession(sessionSize)}
            className="w-full bg-amber-400 hover:bg-amber-300 text-stone-800 font-bold py-4 px-8 rounded-xl text-xl transition-all"
          >
            Nueva Práctica
          </button>
          <button
            onClick={() => setMode("menu")}
            className="w-full mt-3 bg-white/70 hover:bg-white border border-stone-200 text-stone-700 font-semibold py-3 px-8 rounded-xl transition-all"
          >
            Menú Principal
          </button>
        </div>
      </div>
    );
  }

  // ====================== RENDER: ESTUDIO ======================
  return (
    <div className={`${PAGE_BG} p-4`}>
      <div className="max-w-2xl mx-auto py-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-stone-500 text-sm font-medium">
            Pregunta {currentIndex + 1} de {sessionQuestions.length}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-stone-500 text-sm">✅ {score} correctas</span>
            <button
              onClick={() => setMode("menu")}
              className="text-stone-400 hover:text-stone-700 text-xs underline"
            >
              Salir
            </button>
          </div>
        </div>

        <div className="bg-stone-200 rounded-full h-2 mb-6">
          <div
            className="h-2 rounded-full bg-amber-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="bg-white/70 backdrop-blur border border-stone-200 rounded-2xl p-6 mb-4 shadow-sm">
          {isMulti && (
            <div className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Selecciona {currentQ.correct.length} respuestas
            </div>
          )}
          <p className="text-stone-800 text-lg font-medium leading-relaxed">
            <span className="text-amber-700">#{currentQ.id}.</span>{" "}
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
                ? "bg-amber-400 hover:bg-amber-300 text-stone-800 shadow-sm"
                : "bg-stone-100 text-stone-400 cursor-not-allowed"
            }`}
          >
            Verificar Respuesta
          </button>
        )}

        {showExplanation && (
          <div className="mt-4 space-y-3">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <h3 className="text-emerald-700 font-bold mb-2 flex items-center gap-2">
                <span>💡</span> ¿Por qué es correcta?
              </h3>
              <p className="text-emerald-800 text-sm leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>

            {currentQ.wrongExplanations &&
              currentQ.wrongExplanations.some((e) => e) && (
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                  <h3 className="text-rose-600 font-bold mb-2 flex items-center gap-2">
                    <span>❌</span> ¿Por qué no las otras?
                  </h3>
                  <div className="space-y-2">
                    {currentQ.wrongExplanations.map((exp, idx) =>
                      exp ? (
                        <div
                          key={idx}
                          className="text-rose-700 text-sm leading-relaxed"
                        >
                          <span className="font-semibold text-rose-600">
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
              className="w-full bg-amber-400 hover:bg-amber-300 text-stone-800 font-bold py-4 rounded-xl text-lg transition-all"
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
