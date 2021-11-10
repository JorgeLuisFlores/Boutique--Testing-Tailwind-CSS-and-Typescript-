const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  // Themes are used for setting the "tone" of the website. Example (Font and general colors)
  theme: {
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    extend: {
      // spacing: {
      //   '128': '32rem',
      //   '144': '36rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
    }
  },

  // Variants help extend or modify how states such as "hover, focused, active, etc." will act.
  // States may not always work as intended, extend will allow you to extend a variant, see example below.
  variants: {
    extend: {
      // backgroundColor: ["active"]
    },
  },

  // Plugins are used for importing some type of utility, usually in the form of some type of pre built component.
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addComponents, theme }) {
      const buttons = {
        '.btn': {
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.600'),
        },
        '.btn-indigo': {
          backgroundColor: theme('colors.indigo.500'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.indigo.600')
          },
        },
      }

      addComponents(buttons)
    }),

    
  ],
}
