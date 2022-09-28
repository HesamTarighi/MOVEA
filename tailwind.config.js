module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '70%': '70%',
        '60%': '60%'
      },

      fontFamily: {
        'quick_sand': ['"Quicksand"', 'sans-serif'],
        'caveat': ['"Caveat"', 'sans-serif'],
        'raleway': ['"Raleway"', 'sans-serif']
      },

      colors: {
        'primary': '#141414',
        'secondary': '#202020',
        'third': '#FD7014',
        'fourth': '#393E46',
        'fifth': '#EEEEEE',
        'sixth': '#1597BB',
        'seventh': '#fd8300'
      }
    },
  },
  plugins: [],
}
