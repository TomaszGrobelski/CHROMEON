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

      },
      backgroundImage: {
        'gradient-45': 'linear-gradient(45deg, #f76236, #ff9171)',
        'gradient-135': 'linear-gradient(135deg, #f76236, #ff9171)',
        'hsla-gray': 'hsla(0, 0%, 94%, 0.1)',
        
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
      },
      animation: {
        'scrollUpAnimation': 'scrollUp 4s linear infinite',
        'ease-in-out': 'ease-in-out 0.2s',
        'spin': 'spin 20s linear infinite',
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