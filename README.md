# 🚗 Examen Clase B — Estudio interactivo

App web para practicar el **Examen Teórico de Conducción Clase B (Chile)** de forma
interactiva. Tú respondes y la app te enseña **por qué la respuesta es correcta** y
**por qué no lo son las otras alternativas**, para que el contenido te quede claro.

## ✨ Características

- **280 preguntas** del cuestionario oficial (banco completo), con su **clave de
  respuestas oficial**.
- **Incluye las imágenes y señales del PDF** (señales de tránsito, semáforos,
  situaciones viales, señalización con el brazo, etc.).
- Para cada pregunta:
  - 💡 **¿Por qué es correcta?** — explicación didáctica con fundamento técnico o legal.
  - ❌ **¿Por qué no las otras?** — se explica alternativa por alternativa.
- Soporte para preguntas de **selección múltiple** ("marque 2/3 respuestas").
- Prácticas de largo configurable: **15, 30, 50 o las 280**.
- Pantalla de **resultados** con puntaje y **repaso** de cada pregunta.

## 🚀 Cómo ejecutar

Requiere [Node.js](https://nodejs.org) 18+.

```bash
npm install      # instala dependencias
npm run dev      # modo desarrollo (http://localhost:5173)
npm run build    # genera la versión de producción en dist/
npm run preview  # sirve la build de producción
```

## 🧱 Stack

- [React 18](https://react.dev) + [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)

## 📂 Estructura

```
├─ index.html
├─ src/
│  ├─ main.jsx              # punto de entrada
│  ├─ ExamenClaseB.jsx      # componente principal (UI del examen)
│  ├─ questions.js          # banco de 280 preguntas + explicaciones
│  └─ index.css             # Tailwind
├─ public/
│  └─ images/               # imágenes/señales extraídas del PDF
└─ tooling/                 # scripts Python usados para extraer el PDF
```

## ℹ️ Sobre los datos

Las preguntas, alternativas y la **clave de respuestas correctas** provienen del PDF
oficial del cuestionario. Las **explicaciones** ("por qué es correcta" / "por qué no
las otras") son material de estudio elaborado a partir de esa clave oficial y de la
normativa chilena (Ley de Tránsito 18.290 / CONASET). Úsalas como apoyo de estudio;
ante cualquier duda normativa, prima el texto legal vigente.
