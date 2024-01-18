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
  expand: {
    'from': { width: '0' },
    '50%': { width: '50%' },
    'to': { width: '100%' }
  },

  'expand-image': {
    'from': { width: '0', opacity: '0' },
    '50%': { width: '50%', opacity: '0.5' },
    'to': { width: '100%', opacity: '1', padding: '10px 30px' }
  },
  'grow-circle': {
    'from': { transform: 'scale(0)' },
    'to': { transform: 'scale(1)' }
  },
  'move-to-center': {
'0%': {
        transform: 'translate(0, 0)',
      backgroundColor: "#CFFF47",
      opacity: "1.0"
      },
'10%': {
      backgroundColor: "#CFFF47",
      opacity: "1.0"
      },
  '30%': {
        transform: 'translate(-35vw, 0)',
      },
  '50%': {
        transform: 'translate(-35vw, 0)'
      },
   '80%': {
        transform: 'translate(-35vw,0)'
      },
    '100%': {
        transform: 'translate(-35vw, -35vh)',
      backgroundColor: "#CFFF47",
      opacity: "1.0"
      },
      '40%':  {
        transform:'translate(-35vw, -35vh)' 
      },
      '60%': {
        transform: 'translate(-35vw, -15vh)' 
      },
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
  'move-backwards': {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-110%)' }
  },

  'move-forwards': {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(100%)' }
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
    'from': { opacity: '0' },
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
  },
  'v-tb-scroll': {
    'from': {
      transform: 'translateY(-100%)'
    },
    'to': {
      transform: 'translateY(0%)'
    }
  },

  'v-bt-scroll': {
    'from': {
      transform: 'translateY(100%)'
    },
    'to': {
      transform: 'translateY(0%)'
    }
  },
  // bounce: {
  // '0%': {transform: "translateY(0)"} ,
  //  '20%': {transform: "translateY(0)"} ,
  //  '40%': {transform: "translateY(-20px)"} ,
  //   '50%': {transform: "translateY(-10)"} ,
  //  '60%': {transform: "translateY(-5px)"} ,
  //    '80%': {transform: "translateY(-2)"} ,
  //  '100%': {transform: "translateY(0)"} ,
  // }
}
