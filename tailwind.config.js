/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5F6F65',
        secondary: '#808D7C',
        accent: '#9CA986',
        background: '#C9DABF',
      },
    },
  },
  plugins: [],
}
