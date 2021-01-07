const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        green: colors.green
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
