/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#00BF63',
        'gradient-end': '#8C52FF'
      },
      boxShadow: {
        'custom': '4px 4px 0px  rgba(100, 100, 100)',
        'hoverCustom': '0 0 0 rgba(100, 100, 100)'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      }
    },
    
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        '.border-gradient': {
          'border-width': '2px',
          'border-image-slice': 1,
          'border-image-source': 'linear-gradient(90deg, #00BF63, #8C52FF )'
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
    animations
  ],
  
}

