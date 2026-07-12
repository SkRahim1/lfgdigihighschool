/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        school: {
          primary: '#0f172a', // Slate/Navy
          secondary: '#f59e0b', // Amber/Gold
          accent: '#e11d48', // Crimson Rose
          vibrant: '#059669', // Emerald
        }
      }
    },
  },
  plugins: [],
}
