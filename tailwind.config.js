const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ],
        display: [
          'Gilroy',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      screens: {
        'hovtap': { 
          'raw': '(hover: hover)' 
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
