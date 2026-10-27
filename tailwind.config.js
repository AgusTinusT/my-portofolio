/** @type {import('tailwindcss').Config} */

// Warna diambil dari CSS variable di src/input.css,
// sehingga mode terang/gelap cukup diatur di satu tempat.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./*.html", "./src/**/*.js"],
  darkMode: "class",
  theme: {
    fontFamily: {
      serif: ["Fraunces", "Georgia", "serif"],
      sans: ["Inter", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "ui-monospace", "monospace"],
    },
    extend: {
      colors: {
        paper: token("paper"),
        surface: token("surface"),
        ink: token("ink"),
        muted: token("muted"),
        line: token("line"),
        // Satu warna aksen untuk tiap kanal minat
        run: token("run"),
        play: token("play"),
        film: token("film"),
        code: token("code"),
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
