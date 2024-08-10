/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22577a",
        secondary: "#80ed99",
        accent: "#57cc99",
        background: "#38a3a5",
        text: "#C7F9CC",
      },
    },
  },
  plugins: [],
};
