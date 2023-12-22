/** @type {import('tailwindcss').Config} */
import {animations} from './src/animations'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#06C996',
        'yellow': '#CFFF47'
      },
      keyframes: animations 
    },
    animation: {
      'move': 'move 2s linear infinite',
      'gelatine': 'gelatine 1s infinite',
      //2s duration below
      'grow': 'grow 0.5s forwards linear 2s, big_screen_start 2s forwards linear 2.5s, big_screen_end 3.5s forwards linear 3s',
      'vertical-up': 'vertical_up 4s forwards ',
      'vertical-down': 'vertical_down 4s forwards',
      'left-to-right': 'left_to_right 2s forwards ease-out 3s',
      'right-to-left': 'right_to_left 2s forwards ease-out 3s',
      'appear': 'gelatine 0.5s infinite ease-out 6s, opacity 5s linear 4s',
      'conver-screen': 'conver_screen 5s forwards ease-out',
      'opacity': 'fade_in 1s forwards ease-out, fade_out 1s  forwards ease-out 2s',
      'backend-back': 'back 0.8s forwards ease-out',
      'frontend-back': 'back 0.8s forwards ease-out 1s',
      'database-forward': 'back 0.8s forwards ease-out 2s',
      'devops-forward': 'back 0.8s forwards ease-out 2.5s'

    },
    fontFamily: {
      'sans': ['Helvetica',]
    },
    backgroundImage: {
        'shapes-bg': "url('/img/bg.png')",
      }
  },
  plugins: [],
}

