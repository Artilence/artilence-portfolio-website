export const animations = {
        gelatine: {
          'from': { transform: 'scale(1,1)' },
          'to': { transform: 'scale(1,1)' },
          '25%': { transform: 'scale(0.9, 1.1)' },
          '50%': { transform: 'scale(1.1, 0.9)' },
          '75%': { transform: 'scale(0.95, 1.05)' }
        },
        grow: {
          'from': { transform: 'scale(1,1)' },
          '50%': { transform: 'scale(4, 4)' },
          'to': { transform: 'scale(10.5,10.5)' }
        },
        move: {
          'to': { transform: 'translateX(-100%)' }
        },
        left_to_right: {
          'from': { transform: 'translateX(-100%)', opacity: '0' },
          '25%': { opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' }
        },
        right_to_left: {
          'from': { transform: 'translateX(100%)', opacity: '0' },
          '25%': { opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' }
        },
        vertical_up: {
          'from': { transform: 'translate(170%, 120%)', opacity: '0' },
          '25%': { opacity: '0' },
          'to': { transform: 'translate(0, 0)', opacity: '1' }

        },
        fade_in: {
          'from': { opacity: '0', },
          'to': { opacity: '1' }
        },
        fade_out: {
          'from': { opacity: '1', },
          'to': { opacity: '0' }
        },
        conver_screen: {
          'from': { opacity: '1', transform: 'scale(0,0)' },
          '25%': { opacity: '1', transform: 'scale(20,20)' },
          '50%': { opacity: '1', transform: 'scale(25,25)' },
          'to': { opacity: '0', transform: 'scale(30,30)' }
        },
        vertical_down: {
          'from': { transform: 'translate(-170%, -110%)', opacity: '0' },
          '25%': { opacity: '0' },
          'to': { transform: 'translate(0, 0)', opacity: '1' }
        },
        back: {
          'from': {  opacity: '0' },
          '25%': { opacity: '0.5' },
          'to': { opacity: '1' }
        },
        frontend_back: {
          'from': { transform: 'translate(49%, -15%)', opacity: '0' },
          '25%': { opacity: '0' },
          'to': { transform: 'translate(0, -15%)', opacity: '1' }
        },
        database_forward: {
          'from': { transform: 'translate(-49%, -15%)', opacity: '0' },
          '25%': { opacity: '0' },
          'to': { transform: 'translate(0, -15%)', opacity: '1' }
        },
        devops_forward: {
          'from': { transform: 'translate(-155%, -15%)', opacity: '0' },
          '25%': { opacity: '0' },
          'to': { transform: 'translate(0, -15%)', opacity: '1' }
        },
big_screen_start: {
          'from': { transform: 'translate(0, 0) scale(10.5, 10.5)' },
          'to': { transform: 'translate(-1555%, 0) scale(10.5, 10.5)' }
},

big_screen_end: {
          'from': { transform: 'translate(-1555%, 0) scale(10.5, 10.5)', opacity: '1' },
          '99%': { opacity: '0.9' },
          'to': { transform: 'translate(1555%, 0) scale(10.5, 10.5)', opacity: '0' }
}
      }
