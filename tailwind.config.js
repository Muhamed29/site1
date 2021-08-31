module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{"styleScript": ['Style Script', 'cursive']},
      backgroundImage: theme => ({
        'first': "url('/img/1.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
