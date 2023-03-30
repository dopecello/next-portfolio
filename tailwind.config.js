/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'gf': {'min': '280px', 'max': '359px'},
      'xxs': {'min': '360px', 'max': '389px'},
      'xs': {'min': '390px', 'max': '639px'},
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};


//iphonese : 375px