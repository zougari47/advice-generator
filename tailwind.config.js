module.exports = {
  purge: {
    content: ['./src/**/*.{html,js}', '*.html']
  },
  theme: {
    fontFamily: {
      body: ['Manrope', 'sans-serif']
    },
    colors: {
      light: 'hsl(193, 38%, 86%)',
      green: 'hsl(150, 100%, 66%)',
      dark: 'hsl(217, 19%, 38%)',
      darker: 'hsl(217, 19%, 24%)',
      darker2: 'hsl(218, 23%, 16%)'
    },
    extend: {
      keyframes: {
        fade: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        }
      },
      animation: {
        spin: 'spin ease-in-out .5s',
        fade: 'fade ease-in-out 1s'
      },
      boxShadow: {
        circle: '0 0 25px rgba(0, 0, 0, 0.3)'
      }
    }
  },
  plugins: []
};
