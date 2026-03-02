// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "morado": "#7C3AED",
        "morado-oscuro": "#5B21B6",
        "morado-claro": "#EDE9FE",
      },
    },
  },
  plugins: [],
}