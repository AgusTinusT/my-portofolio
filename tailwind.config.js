/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      heading: ["Inter", "sans-serif"],
      body: ["Source Sans 3", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        "gray-darker": "#121212",
        "gray-dark": "#1F1F1F",
        "gray-light": "#F3F4F6",
        "gray-heading": "#111827",
        "gray-text": "#374151",
      },
    },
  },
  plugins: [],
};
