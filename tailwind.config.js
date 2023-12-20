/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#06C996',
      },
      keyframes: {
        gelatine: {
          'from': {transform: 'scale(1,1)'},
          'to': {transform: 'scale(1,1)'},
          '25%': {transform: 'scale(0.9, 1.1)'},
          '50%': {transform: 'scale(1.1, 0.9)'},
          '75%': {transform: 'scale(0.95, 1.05)'}

        },
        grow: {
          'from': {transform: 'scale(1,1)'},
          'to': {transform: 'scale(1,1)'}
        }
      }

    },
    animation: {
        'move': 'move 2s linear infinite',
        'gelatine': 'gelatine 0.5s infinite',
        'grow': 'grow 0.5s'
      },
fontFamily: {
  'sans': ['Helvetica',]
}
  },
  plugins: [],
}

