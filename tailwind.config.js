/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orangePrimary': '#FB7A54',
        'orangeSecound': '#ff9171',
        'orangeDark': '#F76236',
        'purpleBack': '#502869',
        'grayFooter': '#171717',
        'facebook': '#4267B2',
        'twitter': '#1DA1F2',

      },
      backgroundImage: {
        'gradient-45': 'linear-gradient(45deg, #f76236, #ff9171)',
        'gradient-135': 'linear-gradient(135deg, #f76236, #ff9171)',
        'hsla-gray': 'hsla(0, 0%, 94%, 0.1)',
        'instagram': 'conic-gradient(#5B51D8,#833AB4,#C13584,#E1306C,#FD1D1D,#F56040,#FCAF45,#FFDC80,#405DE6,#5B51D8)',
        
      },
      keyframes: {
        translateY:{
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(50%)' }
        },
        rotate:{
          'x-10': 'rotateX(10deg)',
          'y--18': 'rotateY(-18deg)',
          'z-3': 'rotateZ(3deg)'
        },
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'toLeft': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-660%)' },
        },
        'toRight': {
          '0%': { transform: 'translateX(-660%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'scrollUpAnimation': 'scrollUp 4s linear infinite',
        'ease-in-out': 'ease-in-out 0.2s',
        'spin': 'spin 20s linear infinite',
        'animateToLeft': 'toLeft 35s linear infinite',
        'animateToRight': 'toRight 35s linear infinite',
      },
      fontFamily:{
        'league-gothic': "League Gothic",
        'Lato' : 'Lato',
        'Montserrat': "Montserrat",
        'OpenSans': "Open Sans",
      }
    },

  },
  plugins: [
    require('tailwindcss-3d'),
  ],
}