/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        'darkgreen' : 'rgba(47, 95, 71, 1)',
        'lightgreen' : 'rgba(80, 192, 136, 1)',
        'transparentgreen' : 'rgba(4, 61, 32, 0.55)',
        
        'textgreen' : 'rgba(51, 115, 83, 1)',
        'textgray' : 'rgba(219, 219, 219, 1)',
        'textgrey' : 'rgba(219, 219, 219, 1)',

        'darkgrey' : 'rgba(49, 49, 49, 1)',
        'darkgray' :  'rgba(49, 49, 49, 1)',
        'midgrey' : 'rgba(63, 63, 63, 0.7)',
        'midgray' : 'rgba(63, 63, 63, 0.7)',
        'lightgrey' : 'rgba(217, 217, 217, 1)',
        'lightgray' : 'rgba(217, 217, 217, 1)',

        'bg-black': 'rgba(49, 49, 49, 1)',
        'bg-grey' : 'rgba(69, 69, 69, 1)',
        'bg-white' : 'rgba(102, 102, 102, 1)',
        'arrow-grey' : 'rgba(49, 49, 49, 0.7)',
        'arrow-gray' : 'rgba(49, 49, 49, 0.7)',

        'transparent-grey' : 'rgba(219, 219, 219, 0.3)',
        'darkish' : 'rgba(219, 219, 219, 0.4)',
        'light-darkish' : 'rgba(219, 219, 219, 0.7)'
      },
      spacing: {
        '1' : '4px',
        '2' : '8px',
        '2.5' : '10px',
        '3.5' : '14px',
        '4.5' : '18px',
        '7.5' : '30px',
        '9.5' : '38px',
        '9.5-cl' : 'clamp(20px, 2vw, 38px)',
        '10' : '40px',
        '12' : '48px',
        '13' : '52px',
        '14' : '56px',
        '15' : '60px',
        '17' : '65px',
        '17.5' : '70px',
        '17.5-cl' : `clamp(20px, 2vw, 70px)`,
        '25%' : '25%',
        '33%' : '33%',
        '80%' : '80%',
      },
      fontSize: {
        '1' : '4px',
        '2' : '8px',
        '2.5' : '10px',
        '3' : '12px',
        '3.5' : '14px',
        '4' : '16px',
        '4.5' : '18px',
        '4.5-cl' : 'clamp(16px, 1.6vw, 18px)',
        '5' : '20px',
        '5.5' : '22px',
        '6' : '24px',
        '7' : '28px',
        '7.5' : '30px',
        '8' : '32px',
        '9.5' : '38px',
        '10' : '40px',
        '17' : '65px',
        '17.5' : '70px',
        '20' : '80px',
        '22.5' : '90px',
        '25' : '100px',
        '30' : '120px',
        '40' : '160px',
      },
      fontFamily: {
        'lato' : 'Lato',
        'mont' : 'Montserrat'
      },
      keyframes: {
        slideUp : {
          '0%' : { transform : 'translateY(150px)'},
          '100%' : { transform : 'translateY(0px)'},
        },
      },
      screens: {
        'xs' : '460px',
        'clg' : '1200px',
      }
    },
  },
  plugins: [],
}

