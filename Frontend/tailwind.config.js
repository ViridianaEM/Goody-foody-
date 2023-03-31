// const defaultTheme = require('tailwindcss/defaultTheme')
const  DefaultTheme =  require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  // darkMode: 'media',
  content: [
    "./src/**/*.{html,js}", 
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans': ['Dancing Script', ...DefaultTheme.fontFamily.sans],
        'oswald': ['Oswald', ...DefaultTheme.fontFamily.sans],
        'robotocondensed': ['Roboto Condensed', ...DefaultTheme.fontFamily.sans],

      },
      animation: {
        // 'spin-slow': 'spin 3s linear infinite',
        "bounceOnce": 'wiggle 1s ease-in-out 1',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'greengf': '#ACCEC0',
      'bluegf': '#61A6AB',
      'yellowgf': '#FBEEC2',
      'greygf': '#605951',
      'browngf': '#C1B398',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('preline/plugin'),

  ],
}