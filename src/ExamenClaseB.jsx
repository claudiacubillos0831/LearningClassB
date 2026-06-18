import { useState, useEffect, useRef } from "react";
import { questions } from "./questions.js";
import { supabase } from "./supabase.js";

const IMG_BASE = import.meta.env.BASE_URL + "images/";

// ----- Configuración del Examen Real (Dirección de Tránsito) -----
const EXAM_QUESTIONS = 35; // n° de preguntas del examen
const EXAM_DURATION_MIN = 60; // minutos disponibles
const EXAM_DOUBLE_COUNT = 5; // preguntas (al azar) que valen doble puntaje
const EXAM_MAX_ERROR_POINTS = 2; // puntos de error máximos para aprobar
const STORAGE_KEY = "cubitos_exam_history"; // historial de exámenes (localStorage)
const WRONG_KEY = "cubitos_wrong"; // IDs de preguntas falladas para repasar

const CAT_LABEL = {
  "Senales y semaforos": "Señales y semáforos",
  "Vehiculo y mantencion": "Vehículo y mantención",
  "Leyes, normas y documentos": "Leyes, normas y documentos",
  "Conduccion segura": "Conducción segura",
  "Factores humanos (alcohol, fatiga, salud)": "Factores humanos",
  "Emergencias y primeros auxilios": "Emergencias y 1ros auxilios",
};

// Estilos por nivel de preparación
const RD = {
  apto: { bg: "bg-emerald-50 border-emerald-200", text: "text-emerald-700", bar: "#34d399" },
  casi: { bg: "bg-indigo-50 border-indigo-200", text: "text-indigo-700", bar: "#818cf8" },
  preparacion: { bg: "bg-rose-50 border-rose-200", text: "text-rose-600", bar: "#fb7185" },
};

const SESSION_OPTIONS = [
  { value: 15, label: "Rápida", desc: "15 preguntas" },
  { value: 30, label: "Media", desc: "30 preguntas" },
  { value: 50, label: "Larga", desc: "50 preguntas" },
  { value: questions.length, label: "Completa", desc: `Las ${questions.length}` },
];

const PAGE_BG =
  "min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50";

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

function mergeHistory(a, b) {
  const map = new Map();
  [...(a || []), ...(b || [])].forEach((r) => {
    if (r && r.ts != null) map.set(r.ts, r);
  });
  return [...map.values()].sort((x, y) => y.ts - x.ts).slice(0, 100);
}

function mergeWrong(a, b) {
  return [...new Set([...(a || []), ...(b || [])])];
}

function loadWrong() {
  try {
    return JSON.parse(localStorage.getItem(WRONG_KEY)) || [];
  } catch {
    return [];
  }
}

function persistWrong(a) {
  try {
    localStorage.setItem(WRONG_KEY, JSON.stringify(a));
  } catch {
    /* localStorage no disponible */
  }
}

function computeStats(h) {
  const n = h.length;
  if (!n) return { n: 0, cats: [] };
  const passed = h.filter((r) => r.passed).length;
  const pct = (r) => Math.round((r.correct / r.total) * 100);
  // agregado por tema (categoría)
  const acc = {};
  for (const r of h) {
    if (!r.cats) continue;
    for (const [k, v] of Object.entries(r.cats)) {
      acc[k] = acc[k] || { c: 0, t: 0 };
      acc[k].c += v.c;
      acc[k].t += v.t;
    }
  }
  const cats = Object.entries(acc)
    .map(([name, v]) => ({
      name,
      c: v.c,
      t: v.t,
      pct: Math.round((v.c / v.t) * 100),
    }))
    .sort((a, b) => a.pct - b.pct); // más débil primero
  return {
    n,
    passed,
    passRate: Math.round((passed / n) * 100),
    bestPct: Math.max(...h.map(pct)),
    bestCorrect: Math.max(...h.map((r) => r.correct)),
    avgPct: Math.round(h.reduce((a, r) => a + pct(r), 0) / n),
    avgTimeSec: Math.round(h.reduce((a, r) => a + (r.usedSec || 0), 0) / n),
    cats,
  };
}

// Evalúa si está listo/a para rendir en la Dirección de Tránsito (según exámenes recientes)
function computeReadiness(h) {
  if (!h.length) return null;
  const recent = h.slice(0, 5); // historial: más reciente primero
  const n = recent.length;
  const passes = recent.filter((r) => r.passed).length;
  const avgCorrect = Math.round(
    recent.reduce((a, r) => a + (r.correct / r.total) * 100, 0) / n
  );
  const passPct = passes / n;
  let level, label, emoji, msg;
  if (n >= 3 && passPct >= 0.8) {
    level = "apto";
    label = "¡Apto/a!";
    emoji = "✅";
    msg = "Vienes aprobando de forma consistente. Estás en condiciones de rendir en la Dirección de Tránsito.";
  } else if (avgCorrect >= 85 || passPct >= 0.5) {
    level = "casi";
    label = "Casi listo/a";
    emoji = "🟦";
    msg = "Vas muy bien. Rinde algunos exámenes más hasta aprobar de forma consistente.";
  } else {
    level = "preparacion";
    label = "En preparación";
    emoji = "📚";
    msg = "Sigue practicando, sobre todo tus temas más débiles (revisa el desempeño por tema).";
  }
  return { n, passes, avgCorrect, level, label, emoji, msg };
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
          className={`rounded-lg bg-white object-contain border border-slate-200 ${
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
          <p className="text-slate-800 text-sm font-medium">
            <span className="text-indigo-600">#{r.q.id}</span> {r.q.question}
            {r.double && (
              <span className="ml-2 inline-block bg-fuchsia-100 text-fuchsia-600 text-[10px] font-bold px-2 py-0.5 rounded-full align-middle">
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
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
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
    <div className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-4">
      <p className="text-slate-500 text-xs mb-2 font-medium">
        Salta a una pregunta:
      </p>
      <div className="grid grid-cols-8 lg:grid-cols-5 gap-1.5">
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
              <span className="absolute -top-1 -right-1 text-[8px] bg-fuchsia-500 text-white rounded-full px-1 leading-tight">
                ×2
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// Modal genérico reutilizable
function Modal({ icon, title, children, onClose, actions }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-sm w-full p-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {icon && <div className="text-4xl mb-3">{icon}</div>}
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <div className="text-slate-600 text-sm mb-5">{children}</div>
        <div className="flex gap-3">{actions}</div>
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

  // ---------- Historial / estadísticas / repaso de errores ----------
  const [history, setHistory] = useState(() => loadHistory());
  const [wrongIds, setWrongIds] = useState(() => loadWrong());
  const [showClearModal, setShowClearModal] = useState(false);
  const stats = computeStats(history);
  const readiness = computeReadiness(history);
  const wrongQuestions = questions.filter((q) => wrongIds.includes(q.id));

  // ---------- Cuenta en la nube (Supabase) ----------
  const [user, setUser] = useState(null);
  const [authModal, setAuthModal] = useState(false);
  const [authEmail, setAuthEmail] = useState("");
  const [authMsg, setAuthMsg] = useState("");
  const cloudReady = useRef(false);

  // sesión actual + escucha de cambios (login/logout, magic link)
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) =>
      setUser(session?.user ?? null)
    );
    return () => sub.subscription.unsubscribe();
  }, []);

  // al iniciar sesión: traer la nube, fusionar con lo local y guardar en ambos
  useEffect(() => {
    if (!user) {
      cloudReady.current = false;
      return;
    }
    let cancelled = false;
    (async () => {
      const { data } = await supabase
        .from("progress")
        .select("history,wrong")
        .eq("user_id", user.id)
        .maybeSingle();
      if (cancelled) return;
      const mh = mergeHistory(loadHistory(), data?.history || []);
      const mw = mergeWrong(loadWrong(), data?.wrong || []);
      setHistory(mh);
      persistHistory(mh);
      setWrongIds(mw);
      persistWrong(mw);
      await supabase.from("progress").upsert({
        user_id: user.id,
        history: mh,
        wrong: mw,
        updated_at: new Date().toISOString(),
      });
      cloudReady.current = true;
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // empujar cambios a la nube (con un pequeño retardo)
  useEffect(() => {
    if (!user || !cloudReady.current) return;
    const t = setTimeout(() => {
      supabase.from("progress").upsert({
        user_id: user.id,
        history,
        wrong: wrongIds,
        updated_at: new Date().toISOString(),
      });
    }, 800);
    return () => clearTimeout(t);
  }, [history, wrongIds, user]);

  const sendMagicLink = async () => {
    if (!authEmail || !authEmail.includes("@")) {
      setAuthMsg("Escribe un correo válido.");
      return;
    }
    setAuthMsg("Enviando enlace…");
    const { error } = await supabase.auth.signInWithOtp({
      email: authEmail.trim(),
      options: { emailRedirectTo: window.location.href },
    });
    setAuthMsg(
      error
        ? "Error: " + error.message
        : "¡Listo! Revisa tu correo y abre el enlace para entrar (puede llegar a spam)."
    );
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    cloudReady.current = false;
  };

  const addWrong = (ids) => {
    setWrongIds((prev) => {
      const s = new Set(prev);
      ids.forEach((i) => s.add(i));
      const a = [...s];
      persistWrong(a);
      return a;
    });
  };
  const removeWrong = (id) => {
    setWrongIds((prev) => {
      const a = prev.filter((x) => x !== id);
      persistWrong(a);
      return a;
    });
  };

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
    if (ok) {
      setScore((prev) => prev + 1);
      if (wrongIds.includes(currentQ.id)) removeWrong(currentQ.id);
    } else {
      addWrong([currentQ.id]);
    }
    setResults((prev) => [
      ...prev,
      { q: currentQ, selected: selectedAnswers, isCorrect: ok },
    ]);
  };

  const startPracticeWrong = () => {
    const picked = shuffle(wrongQuestions);
    if (!picked.length) return;
    setSessionSize(picked.length);
    setSessionQuestions(picked);
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setShowExplanation(false);
    setAnswered(false);
    setScore(0);
    setResults([]);
    setMode("study");
    window.scrollTo({ top: 0 });
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
        ? "border-2 border-indigo-400 bg-indigo-50 text-indigo-900"
        : "border border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer text-slate-700";
    }
    if (isCorrect)
      return "border-2 border-emerald-400 bg-emerald-50 text-emerald-900";
    if (isSelected && !isCorrect)
      return "border-2 border-rose-300 bg-rose-50 text-rose-900";
    return "border border-slate-200 bg-slate-50 text-slate-400";
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
    // desglose por tema y registro de errores para repaso
    const cats = {};
    for (const r of rows) {
      const k = r.q.category || "Otros";
      cats[k] = cats[k] || { c: 0, t: 0 };
      cats[k].t += 1;
      if (r.isCorrect) cats[k].c += 1;
    }
    addWrong(rows.filter((r) => !r.isCorrect).map((r) => r.q.id));
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
      cats,
    };
    const newHist = [record, ...history].slice(0, 100);
    setHistory(newHist);
    persistHistory(newHist);
    setMode("examResults");
    window.scrollTo({ top: 0 });
  };

  const doClearHistory = () => {
    setHistory([]);
    persistHistory([]);
    setShowClearModal(false);
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
        <div className="max-w-lg w-full text-center animate-fadeIn">
          {/* Cuenta en la nube */}
          <div className="flex justify-end mb-2 h-5">
            {user ? (
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="truncate max-w-[200px]">☁️ {user.email}</span>
                <button
                  onClick={signOut}
                  className="underline hover:text-slate-700"
                >
                  Salir
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setAuthMsg("");
                  setAuthModal(true);
                }}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-500"
              >
                ☁️ Guardar en mi cuenta
              </button>
            )}
          </div>

          <div className="mb-8">
            <img
              src={IMG_BASE.replace("images/", "") + "logo-cube.png"}
              alt="Cubitos"
              className="mx-auto h-20 w-20 mb-3 drop-shadow-sm"
            />
            <p className="text-indigo-400 text-xs font-semibold tracking-[0.35em] uppercase mb-1">
              Cubitos
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-800 mb-2">
              Examen Clase B
            </h1>
            <p className="text-slate-500 text-base">
              Cuestionario General de Conducción · Chile
            </p>
          </div>

          {/* Preparación para la Dirección de Tránsito */}
          {readiness ? (
            <div
              className={`rounded-2xl p-5 mb-6 border text-left ${RD[readiness.level].bg}`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-slate-500 text-xs font-medium mb-0.5">
                    ¿Listo/a para la Dirección de Tránsito?
                  </p>
                  <p
                    className={`text-2xl font-extrabold ${RD[readiness.level].text}`}
                  >
                    {readiness.emoji} {readiness.label}
                  </p>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className={`text-3xl font-bold ${RD[readiness.level].text}`}>
                    {readiness.avgCorrect}%
                  </div>
                  <div className="text-slate-400 text-[10px]">
                    aciertos · últimos {readiness.n}
                  </div>
                </div>
              </div>
              {/* barra con la meta (~94%) marcada */}
              <div className="relative mt-3 h-2.5 bg-slate-200 rounded-full">
                <div
                  className="h-2.5 rounded-full transition-all"
                  style={{
                    width: `${readiness.avgCorrect}%`,
                    background: RD[readiness.level].bar,
                  }}
                />
                <div
                  className="absolute -top-1 -bottom-1 w-0.5 bg-slate-500"
                  style={{ left: "94%" }}
                  title="Meta para aprobar (~94%)"
                />
              </div>
              <div className="flex justify-end">
                <span className="text-slate-400 text-[10px] mt-1">
                  meta para aprobar ≈ 94%
                </span>
              </div>
              <p className="text-slate-600 text-xs mt-2">{readiness.msg}</p>
            </div>
          ) : (
            <div className="rounded-2xl p-5 mb-6 border border-slate-200 bg-white/60 text-left">
              <p className="text-slate-500 text-xs font-medium mb-1">
                ¿Listo/a para la Dirección de Tránsito?
              </p>
              <p className="text-slate-600 text-sm">
                Rinde tu primer <b>Examen Real</b> y aquí verás tu nivel de
                preparación y si estás apto/a.
              </p>
            </div>
          )}

          {/* Modo Examen Real */}
          <div className="bg-gradient-to-br from-indigo-100 to-violet-100 border border-indigo-200 rounded-2xl p-6 mb-6 text-left shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📝</span>
              <h2 className="text-slate-800 font-bold text-lg">Examen Real</h2>
            </div>
            <p className="text-slate-600 text-sm mb-3">
              Simulacro como en la Dirección de Tránsito:
            </p>
            <ul className="space-y-1 text-slate-600 text-sm mb-4">
              <li>🕐 {EXAM_QUESTIONS} preguntas en {EXAM_DURATION_MIN} minutos</li>
              <li>✖️ {EXAM_DOUBLE_COUNT} preguntas valen doble puntaje (×2)</li>
              <li>
                ✅ Apruebas con máximo {EXAM_MAX_ERROR_POINTS} puntos de error
              </li>
            </ul>
            <button
              onClick={startExam}
              className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-sm"
            >
              Rendir Examen Real
            </button>
          </div>

          {/* Modo Estudio */}
          <div className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-6 text-left shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📖</span>
              <h2 className="text-slate-800 font-bold text-lg">Modo Estudio</h2>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Practica con explicación inmediata de cada respuesta (por qué es
              correcta y por qué no las otras).
            </p>
            <div className="grid grid-cols-2 gap-3">
              {SESSION_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => startSession(opt.value)}
                  className="bg-indigo-50 hover:bg-indigo-100 border border-slate-200 text-slate-700 rounded-xl py-3 px-4 transition-all duration-200"
                >
                  <div className="text-base font-bold">{opt.label}</div>
                  <div className="text-slate-500 text-xs">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Practicar mis errores */}
          <button
            onClick={startPracticeWrong}
            disabled={wrongQuestions.length === 0}
            className={`w-full mt-4 rounded-2xl p-4 flex items-center justify-between transition-all shadow-sm border ${
              wrongQuestions.length
                ? "bg-rose-50 hover:bg-rose-100 border-rose-200 text-rose-600"
                : "bg-white/60 border-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            <span className="flex items-center gap-2 font-semibold">
              <span className="text-xl">🔁</span> Practicar mis errores
            </span>
            <span className="text-sm">
              {wrongQuestions.length
                ? `${wrongQuestions.length} ${
                    wrongQuestions.length === 1 ? "pregunta" : "preguntas"
                  } →`
                : "¡Sin errores! 🎉"}
            </span>
          </button>

          {/* Mis estadísticas */}
          <button
            onClick={() => setMode("stats")}
            className="w-full mt-4 bg-white/60 hover:bg-white border border-slate-200 text-slate-700 rounded-2xl p-4 flex items-center justify-between transition-all shadow-sm"
          >
            <span className="flex items-center gap-2 font-semibold">
              <span className="text-xl">📊</span> Mis estadísticas
            </span>
            <span className="text-slate-500 text-sm">
              {stats.n > 0
                ? `${stats.n} ${stats.n === 1 ? "examen" : "exámenes"} · ${stats.passed} aprob.`
                : "Aún sin datos →"}
            </span>
          </button>

          <p className="text-slate-400 text-sm mt-6">
            {questions.length} preguntas disponibles con explicaciones completas
          </p>
        </div>

        {authModal && (
          <Modal
            icon="☁️"
            title="Tu cuenta"
            onClose={() => setAuthModal(false)}
            actions={
              <>
                <button
                  onClick={() => setAuthModal(false)}
                  className="flex-1 py-3 rounded-xl font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all"
                >
                  Cerrar
                </button>
                <button
                  onClick={sendMagicLink}
                  className="flex-1 py-3 rounded-xl font-bold bg-indigo-500 text-white hover:bg-indigo-400 transition-all"
                >
                  Enviar enlace
                </button>
              </>
            }
          >
            <p className="mb-3 text-left">
              Ingresa tu correo y te enviaremos un <b>enlace mágico</b> para
              entrar (sin contraseña). Tu progreso se guardará y sincronizará en
              cualquier dispositivo, incluso en incógnito.
            </p>
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              value={authEmail}
              onChange={(e) => setAuthEmail(e.target.value)}
              placeholder="tucorreo@ejemplo.com"
              className="w-full border border-slate-300 rounded-xl px-3 py-2 text-slate-800 text-left focus:outline-none focus:border-indigo-400"
            />
            {authMsg && (
              <p className="mt-2 text-xs text-slate-500 text-left">{authMsg}</p>
            )}
          </Modal>
        )}
      </div>
    );
  }

  // ====================== RENDER: ESTADÍSTICAS ======================
  if (mode === "stats") {
    return (
      <div className={`${PAGE_BG} p-4`}>
        <div className="max-w-2xl mx-auto py-8 animate-fadeIn">
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">📊</div>
            <h1 className="text-3xl font-bold text-slate-800 mb-1">
              Mis estadísticas
            </h1>
            <p className="text-indigo-500">Tu progreso en el Examen Real</p>
          </div>

          {stats.n === 0 ? (
            <div className="bg-white/70 border border-slate-200 rounded-2xl p-8 text-center mb-6">
              <p className="text-slate-600">
                Todavía no has rendido ningún Examen Real. ¡Rinde el primero y
                aquí verás tu progreso!
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-white/70 border border-slate-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-slate-800">
                    {stats.n}
                  </div>
                  <div className="text-slate-500 text-xs">Exámenes</div>
                </div>
                <div className="bg-emerald-100 border border-emerald-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-600">
                    {stats.passRate}%
                  </div>
                  <div className="text-slate-500 text-xs">
                    Aprobados ({stats.passed})
                  </div>
                </div>
                <div className="bg-white/70 border border-slate-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-slate-800">
                    {stats.bestCorrect}/{EXAM_QUESTIONS}
                  </div>
                  <div className="text-slate-500 text-xs">Mejor resultado</div>
                </div>
                <div className="bg-white/70 border border-slate-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-slate-800">
                    {fmt(stats.avgTimeSec)}
                  </div>
                  <div className="text-slate-500 text-xs">Tiempo prom.</div>
                </div>
              </div>

              {stats.cats.length > 0 && (
                <>
                  <h2 className="text-slate-800 font-semibold mb-3">
                    Desempeño por tema
                  </h2>
                  <div className="bg-white/70 border border-slate-200 rounded-2xl p-4 mb-6 space-y-3">
                    {stats.cats.map((c) => {
                      const color =
                        c.pct < 60
                          ? "#fb7185"
                          : c.pct < 80
                          ? "#818cf8"
                          : "#34d399";
                      return (
                        <div key={c.name}>
                          <div className="flex justify-between items-baseline text-xs mb-1">
                            <span className="text-slate-700 font-medium">
                              {CAT_LABEL[c.name] || c.name}
                            </span>
                            <span className="text-slate-500">
                              {c.pct}% · {c.c}/{c.t}
                            </span>
                          </div>
                          <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-2.5 rounded-full transition-all"
                              style={{ width: `${c.pct}%`, background: color }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              <h2 className="text-slate-800 font-semibold mb-3">Historial</h2>
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
                        <div className="text-slate-800 text-sm font-medium">
                          {r.passed ? "Aprobado" : "Reprobado"} · {r.correct}/
                          {r.total} correctas
                        </div>
                        <div className="text-slate-500 text-xs">
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
                onClick={() => setShowClearModal(true)}
                className="w-full mb-3 bg-rose-50 hover:bg-rose-100 text-rose-500 font-semibold py-3 rounded-xl transition-all border border-rose-200"
              >
                Borrar historial
              </button>
            </>
          )}

          <button
            onClick={() => setMode("menu")}
            className="w-full bg-white/70 hover:bg-white border border-slate-200 text-slate-700 font-semibold py-3 px-8 rounded-xl transition-all"
          >
            ← Volver al menú
          </button>
        </div>

        {showClearModal && (
          <Modal
            icon="🗑️"
            title="¿Borrar el historial?"
            onClose={() => setShowClearModal(false)}
            actions={
              <>
                <button
                  onClick={() => setShowClearModal(false)}
                  className="flex-1 py-3 rounded-xl font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all"
                >
                  Cancelar
                </button>
                <button
                  onClick={doClearHistory}
                  className="flex-1 py-3 rounded-xl font-bold bg-rose-500 text-white hover:bg-rose-400 transition-all"
                >
                  Borrar
                </button>
              </>
            }
          >
            Se eliminarán tus {history.length}{" "}
            {history.length === 1 ? "examen" : "exámenes"} guardados. Esta acción
            no se puede deshacer.
          </Modal>
        )}
      </div>
    );
  }

  // ====================== RENDER: EXAMEN (rindiendo) ======================
  if (mode === "exam") {
    const lowTime = timeLeft <= 5 * 60;
    const selected = examAnswers[examIndex] || [];
    return (
      <div className={`${PAGE_BG} p-4`}>
        <div className="max-w-2xl mx-auto py-6 animate-fadeIn">
          {/* Barra superior: progreso + cronómetro */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-500 text-sm font-medium">
              Pregunta {examIndex + 1} de {examQuestions.length}
            </span>
            <span
              className={`font-mono text-lg font-bold px-3 py-1 rounded-lg border ${
                lowTime
                  ? "bg-rose-100 text-rose-600 border-rose-200 animate-pulse"
                  : "bg-white text-slate-700 border-slate-200"
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
                      ? "bg-indigo-500 text-white border-indigo-500 ring-2 ring-indigo-200"
                      : ans
                      ? "bg-indigo-200 text-slate-700 border-indigo-200"
                      : "bg-white text-slate-400 border-slate-200 hover:bg-indigo-50"
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
          <div
            key={examIndex}
            className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-6 mb-4 shadow-sm animate-fadeIn"
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {examIsMulti && (
                <span className="inline-block bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">
                  Selecciona {examQ.correct.length} respuestas
                </span>
              )}
              {doubleSet.has(examIndex) && (
                <span className="inline-block bg-fuchsia-100 text-fuchsia-600 text-xs font-bold px-3 py-1 rounded-full">
                  Doble puntaje ×2
                </span>
              )}
            </div>
            <p className="text-slate-800 text-lg font-medium leading-relaxed">
              <span className="text-indigo-600">#{examQ.id}.</span> {examQ.question}
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
                      ? "border-2 border-indigo-400 bg-indigo-50 text-indigo-900"
                      : "border border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer text-slate-700"
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
              className="flex-1 py-3 rounded-xl font-semibold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              ← Anterior
            </button>
            {examIndex + 1 < examQuestions.length ? (
              <button
                onClick={() => {
                  setExamIndex((i) => i + 1);
                  window.scrollTo({ top: 0 });
                }}
                className="flex-1 py-3 rounded-xl font-semibold bg-indigo-500 text-white hover:bg-indigo-400 transition-all"
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
            className="w-full py-2 text-slate-400 hover:text-slate-600 text-sm underline"
          >
            Finalizar examen ahora
          </button>
        </div>

        {/* MODAL de entrega */}
        {showFinishModal && (
          <Modal
            icon="📤"
            title="¿Entregar el examen?"
            onClose={() => setShowFinishModal(false)}
            actions={
              <>
                <button
                  onClick={() => setShowFinishModal(false)}
                  className="flex-1 py-3 rounded-xl font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all"
                >
                  Seguir
                </button>
                <button
                  onClick={finishExam}
                  className="flex-1 py-3 rounded-xl font-bold bg-emerald-500 text-white hover:bg-emerald-400 transition-all"
                >
                  Entregar
                </button>
              </>
            }
          >
            {unansweredCount > 0 ? (
              <p className="mb-1">
                Te faltan{" "}
                <span className="font-bold text-rose-500">
                  {unansweredCount}
                </span>{" "}
                {unansweredCount === 1 ? "pregunta" : "preguntas"} por responder.
              </p>
            ) : (
              <p className="mb-1">Respondiste todas las preguntas. 🎉</p>
            )}
            <p className="text-slate-400 text-xs">
              Las no respondidas cuentan como incorrectas. No podrás cambiar tus
              respuestas después.
            </p>
          </Modal>
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
        <div className="max-w-4xl mx-auto py-8 animate-fadeIn">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">{passed ? "🎉" : "😔"}</div>
            <h1
              className={`text-4xl font-extrabold mb-1 ${
                passed ? "text-emerald-600" : "text-rose-500"
              }`}
            >
              {passed ? "APROBADO" : "REPROBADO"}
            </h1>
            <p className="text-slate-600">
              {passed
                ? "¡Felicitaciones! Cumpliste el estándar del examen."
                : `Necesitas máximo ${EXAM_MAX_ERROR_POINTS} puntos de error para aprobar.`}
            </p>
          </div>

          {/* Resumen */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <div className="bg-white/70 border border-slate-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-slate-800">
                {correctCount}/{examQuestions.length}
              </div>
              <div className="text-slate-500 text-xs">Correctas</div>
            </div>
            <div className="bg-white/70 border border-slate-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-slate-800">
                {earned}/{totalPoints}
              </div>
              <div className="text-slate-500 text-xs">Puntaje</div>
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
              <div className="text-slate-500 text-xs">Puntos de error</div>
            </div>
            <div className="bg-white/70 border border-slate-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-slate-800">
                {fmt(usedSec)}
              </div>
              <div className="text-slate-500 text-xs">Tiempo usado</div>
            </div>
          </div>

          <p className="text-center text-slate-500 text-sm mb-6">
            Llevas {stats.n} {stats.n === 1 ? "examen" : "exámenes"} rendidos ·{" "}
            {stats.passed} aprobados ·{" "}
            <button
              onClick={() => setMode("stats")}
              className="underline hover:text-slate-800"
            >
              ver estadísticas
            </button>
          </p>

          <h2 className="text-slate-800 font-semibold mb-3">
            Revisión por pregunta
          </h2>
          <div className="lg:flex lg:gap-6 lg:items-start mb-6">
            <div className="lg:order-2 lg:w-52 lg:flex-shrink-0 lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-auto mb-4 lg:mb-0">
              <ReviewNav rows={rows} prefix="exrev" />
            </div>
            <div className="lg:order-1 lg:flex-1 space-y-3 min-w-0">
              {rows.map((r, i) => (
                <ReviewItem key={i} r={r} idAttr={`exrev-${i}`} />
              ))}
            </div>
          </div>

          {wrongQuestions.length > 0 && (
            <button
              onClick={startPracticeWrong}
              className="w-full mb-3 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 font-bold py-4 px-8 rounded-xl text-lg transition-all"
            >
              🔁 Practicar mis errores ({wrongQuestions.length})
            </button>
          )}

          <button
            onClick={startExam}
            className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all"
          >
            Rendir otro examen
          </button>
          <button
            onClick={() => setMode("menu")}
            className="w-full mt-3 bg-white/70 hover:bg-white border border-slate-200 text-slate-700 font-semibold py-3 px-8 rounded-xl transition-all"
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
        <div className="max-w-4xl mx-auto py-8 animate-fadeIn">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{emoji}</div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              Resultado Final
            </h1>
            <p className="text-slate-600">{msg}</p>
          </div>

          <div className="bg-white/70 border border-slate-200 rounded-2xl p-6 mb-6 text-center shadow-sm">
            <div className="text-6xl font-bold text-slate-800 mb-2">{pct}%</div>
            <div className="text-slate-500">
              {score} de {sessionQuestions.length} correctas
            </div>
            <div className="mt-4 bg-slate-200 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all"
                style={{
                  width: `${pct}%`,
                  background:
                    pct >= 80 ? "#34d399" : pct >= 60 ? "#818cf8" : "#fb7185",
                }}
              />
            </div>
          </div>

          <h2 className="text-slate-800 font-semibold mb-3">
            Repaso de la práctica
          </h2>
          <div className="lg:flex lg:gap-6 lg:items-start mb-6">
            <div className="lg:order-2 lg:w-52 lg:flex-shrink-0 lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-auto mb-4 lg:mb-0">
              <ReviewNav rows={results} prefix="strev" />
            </div>
            <div className="lg:order-1 lg:flex-1 space-y-3 min-w-0">
              {results.map((r, i) => (
                <ReviewItem key={i} r={r} idAttr={`strev-${i}`} />
              ))}
            </div>
          </div>

          <button
            onClick={() => startSession(sessionSize)}
            className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all"
          >
            Nueva Práctica
          </button>
          <button
            onClick={() => setMode("menu")}
            className="w-full mt-3 bg-white/70 hover:bg-white border border-slate-200 text-slate-700 font-semibold py-3 px-8 rounded-xl transition-all"
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
      <div className="max-w-2xl mx-auto py-6 animate-fadeIn">
        <div className="flex items-center justify-between mb-4">
          <span className="text-slate-500 text-sm font-medium">
            Pregunta {currentIndex + 1} de {sessionQuestions.length}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-slate-500 text-sm">✅ {score} correctas</span>
            <button
              onClick={() => setMode("menu")}
              className="text-slate-400 hover:text-slate-700 text-xs underline"
            >
              Salir
            </button>
          </div>
        </div>

        <div className="bg-slate-200 rounded-full h-2 mb-6">
          <div
            className="h-2 rounded-full bg-indigo-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div
          key={currentIndex}
          className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-6 mb-4 shadow-sm animate-fadeIn"
        >
          {isMulti && (
            <div className="inline-block bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Selecciona {currentQ.correct.length} respuestas
            </div>
          )}
          <p className="text-slate-800 text-lg font-medium leading-relaxed">
            <span className="text-indigo-600">#{currentQ.id}.</span>{" "}
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
                ? "bg-indigo-500 hover:bg-indigo-400 text-white shadow-sm"
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
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
              className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-4 rounded-xl text-lg transition-all"
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
