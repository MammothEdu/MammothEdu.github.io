/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lpurple: '#6F5374',
        darkpurple: '#432F47',
        cyanblue: '#49A7B6',
        darkblue: '#4971B6'
      }
    },
  },
  plugins: [],
}

