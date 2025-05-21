/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("tw-animate-css"),
    require("daisyui"),
    require("flowbite")
  ],
  daisyui: {
    themes: [
      {
        myblue: {
          "primary": "#1E40AF",         // głęboki niebieski
          "primary-focus": "#1E3A8A",
          "primary-content": "#ffffff",
          "secondary": "#2563EB",       // jaśniejszy akcent
          "secondary-focus": "#1D4ED8",
          "secondary-content": "#ffffff",
          "accent": "#3B82F6",
          "neutral": "#111827",
          "base-100": "#1F2937",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      "dark",
      "light"
    ],
    defaultTheme: "myblue",
  },
};
