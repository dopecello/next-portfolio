/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'gf': {'min': '280px', 'max': '360px'},
      'xxs': {'min': '360px', 'max': '390px'},
      'xs': {'min': '390px', 'max': '639px'},
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'lite-blue': '#059ae6'
      }
    },
  },
  plugins: [],
};
