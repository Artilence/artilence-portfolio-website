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
        'yellow': '#CFFF47',
        'gray': '#676767'
      },
      keyframes: animations 
    },
    animation: {
      'move-to-center': 'move-to-center 10s ease-in  6.2s forwards',
      'gelatine': 'gelatine 1s infinite',
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
      'devops-forward': 'back 0.8s forwards ease-out 2.5s',
      'fade-in': 'fade_in 2s forwards 1.8s',
      'fade-out': 'fade_out 0.3s forwards',
      'fade-out-rev': 'fade_out 0.3s reverse forwards',
      'fill-text': 'fillText 0.8s forwards',
      'v-tb-scroll': 'v-tb-scroll 3s ease-out forwards',
      'v-bt-scroll':'v-bt-scroll 3s ease-out forwards 0.5s',
      'v-tb-scroll-lg': 'v-tb-scroll 3s ease-out forwards 3s',
      'v-bt-scroll-lg':'v-bt-scroll 3s ease-out forwards 3s' ,
      'bounce': 'bounce 3s ease-in-out infinite',
      'grow-circle': 'grow-circle 0.5s ease-out forwards',
      'expand': 'expand 3s ease-in forwards',
      'expand-image': 'expand-image 1s linear forwards 1s',
// 'move-backwards': 'move-backwards 3s ease-in forwards 12s',
// 'move-backwards-reverse': 'move-backwards 3s ease-in reverse forwards 12s',
    },
    fontFamily: {
      'sans': ['Helvetica',]
    },
    backgroundImage: {
        'shapes-bg': "url('/img/bg.png')",
      },
boxShadow: {
        'connect': '0px 4px 11.1px 0px rgba(0, 0, 0, 0.15)',
      }
  },
plugins: [require("daisyui")]
}

