import { useState, useMemo } from "react";
import { questions } from "./questions.js";

const IMG_BASE = import.meta.env.BASE_URL + "images/";

const SESSION_OPTIONS = [
  { value: 15, label: "Rápida", desc: "15 preguntas" },
  { value: 30, label: "Media", desc: "30 preguntas" },
  { value: 50, label: "Larga", desc: "50 preguntas" },
  { value: questions.length, label: "Completa", desc: `Las ${questions.length}` },
];

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

export default function ExamenClaseB() {
  const [mode, setMode] = useState("menu"); // menu, study, results
  const [sessionSize, setSessionSize] = useState(15);
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);

  const startSession = (size = sessionSize) => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, size);
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
    const correct = [...currentQ.correct].sort().join(",");
    const selected = [...selectedAnswers].sort().join(",");
    const isCorrect = correct === selected;
    if (isCorrect) setScore((prev) => prev + 1);
    setResults((prev) => [
      ...prev,
      { q: currentQ, selected: selectedAnswers, isCorrect },
    ]);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 >= sessionQuestions.length) {
      setMode("results");
      window.scrollTo({ top: 0 });
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswers([]);
      setShowExplanation(false);
      setAnswered(false);
      window.scrollTo({ top: 0 });
    }
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

  // ---------------- MENU ----------------
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

          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-6 text-left">
            <h2 className="text-white font-semibold mb-3 text-lg">
              ¿Cómo funciona?
            </h2>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>✅ Preguntas aleatorias del banco oficial</li>
              <li>🖼️ Incluye las imágenes y señales del examen</li>
              <li>💡 Te explico por qué la respuesta es correcta</li>
              <li>❌ Y por qué las otras alternativas no lo son</li>
              <li>📊 Al final ves tu puntaje y repasas tus errores</li>
            </ul>
          </div>

          <p className="text-blue-300 text-sm mb-3 font-medium">
            Elige el largo de tu práctica:
          </p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {SESSION_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => startSession(opt.value)}
                className="bg-white/10 hover:bg-blue-500 border border-white/15 hover:border-blue-400 text-white rounded-xl py-4 px-4 transition-all duration-200 group"
              >
                <div className="text-lg font-bold">{opt.label}</div>
                <div className="text-blue-300 group-hover:text-blue-100 text-xs">
                  {opt.desc}
                </div>
              </button>
            ))}
          </div>

          <p className="text-blue-400 text-sm">
            {questions.length} preguntas disponibles con explicaciones completas
          </p>
        </div>
      </div>
    );
  }

  // ---------------- RESULTS ----------------
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
              <div
                key={i}
                className={`rounded-xl p-4 border ${
                  r.isCorrect
                    ? "bg-green-500/10 border-green-500/30"
                    : "bg-red-500/10 border-red-500/30"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0">
                    {r.isCorrect ? "✅" : "❌"}
                  </span>
                  <div className="min-w-0">
                    <p className="text-white text-sm font-medium">
                      <span className="text-blue-300">#{r.q.id}</span>{" "}
                      {r.q.question}
                    </p>
                    <QuestionImages images={r.q.images} small />
                    <p className="text-green-400 text-xs mt-2">
                      ✔ Correcta:{" "}
                      {r.q.correct
                        .map((c) => r.q.options[c])
                        .join("  ·  ")}
                    </p>
                    {!r.isCorrect && (
                      <p className="text-red-300 text-xs mt-1">
                        ✘ Tu respuesta:{" "}
                        {r.selected.length
                          ? r.selected.map((s) => r.q.options[s]).join("  ·  ")
                          : "(sin responder)"}
                      </p>
                    )}
                    {r.q.explanation && (
                      <p className="text-blue-100/80 text-xs mt-2 leading-relaxed">
                        💡 {r.q.explanation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
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

  // ---------------- STUDY ----------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-4">
      <div className="max-w-2xl mx-auto py-6">
        {/* Header */}
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

        {/* Progress bar */}
        <div className="bg-white/10 rounded-full h-2 mb-6">
          <div
            className="h-2 rounded-full bg-blue-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question card */}
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

        {/* Options */}
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

        {/* Check button */}
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

        {/* Explanation */}
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
