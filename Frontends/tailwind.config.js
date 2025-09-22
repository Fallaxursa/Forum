/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  darkMode: false, 
  theme: {
    extend: {
      fontFamily: {
        soul: ['"Soul"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};