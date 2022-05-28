module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      }
    },
    extend: {
      inset: ({ theme }) => ({
        auto: 'auto',
        ...theme('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        full: '100%',
        'screen-w': '100vw',
        'screen-h': '100vh'
      }),
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        5: '5',
        100: '100'
      }
    }
  },
  plugins: []
}
