/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",            // dla klas w <body> index.html
    "./src/**/*.{js,jsx,ts,tsx}" // wszystkie pliki React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
