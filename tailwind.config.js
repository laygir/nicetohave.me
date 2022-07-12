const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: 'zwolightplainalt20mlregular',
        sans: 'zwolightplainalt20mlregular',
      },
      colors: {
        ...colors,
        primary: '#ee5759',
        'primary-hover': '#ef3d3f',
      },
      letterSpacing: {
        widest: '.2em',
      },
    },
  },
  variants: {
    extend: {
       scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
};
