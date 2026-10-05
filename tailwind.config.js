/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FAF7F2',
          card: '#F3ECE1',
          dark: '#141413',
          gold: '#C5A880',
          goldLight: '#E8D8C3',
          muted: '#736F68',
          border: '#E5DCce'
        }
      },
      fontFamily: {
        serif: ['"Italiana"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}