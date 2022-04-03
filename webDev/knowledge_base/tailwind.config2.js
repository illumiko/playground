module.exports = {
  purge: {
    enabled: false,
    content: [
      './dev/**/*.html',
      './dev/**/*.css'
    ],
},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  presets: [require('full-palette')],
  plugins: [],
}
