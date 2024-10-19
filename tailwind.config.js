/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ["Marcellus", "sans-serif"],
        antiqua: ["UncialAntiqua", "sans-serif"],
      },
    },
  },
  plugins: [],
};
