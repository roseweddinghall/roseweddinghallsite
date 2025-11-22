/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'romantic': ['Allura', 'cursive'],
        'brush': ['Alex Brush', 'cursive'],
        'elegant': ['Playfair Display', 'serif'],
        'classic': ['Cormorant Garamond', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#a4585a',
          50: '#f7f3f3',
          100: '#ede6e7',
          200: '#dccfd1',
          300: '#c6aeb2',
          400: '#b18a8f',
          500: '#a4585a',
          600: '#94474a',
          700: '#7d3d40',
          800: '#683339',
          900: '#572c30',
        },
        secondary: {
          DEFAULT: '#8b4a4d',
          50: '#f5f0f0',
          100: '#e8dddd',
          200: '#d5c0c1',
          300: '#be9d9f',
          400: '#a88284',
          500: '#8b4a4d',
          600: '#7a373a',
          700: '#653033',
          800: '#542a2d',
          900: '#452529',
        },
        accent: {
          DEFAULT: '#c47a7d',
          50: '#f9f6f6',
          100: '#f2ece5',
          200: '#e5d8d8',
          300: '#d3b9bb',
          400: '#c09698',
          500: '#c47a7d',
          600: '#b0686b',
          700: '#9c575a',
          800: '#84484b',
          900: '#6e3c3f',
        },
        luxury: {
          gold: '#d4af37',
          'gold-light': '#f4e4bc',
          'gold-dark': '#b8941f',
          brass: '#b5a642',
          'brass-light': '#e8e0a8',
        },
        success: '#8b4a4d',
        warning: '#c47a7d',
        error: '#7d3d40',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'slow-gentle': 'slowGentle 5s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'bubble-rise-1': 'bubbleRise1 8s ease-in-out infinite',
        'bubble-rise-2': 'bubbleRise2 10s ease-in-out infinite',
        'bubble-rise-3': 'bubbleRise3 12s ease-in-out infinite',
        'bubble-rise-4': 'bubbleRise4 9s ease-in-out infinite',
        'bubble-rise-5': 'bubbleRise5 11s ease-in-out infinite',
        'bubble-rise-6': 'bubbleRise6 13s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slowGentle: {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)',
            opacity: '1'
          },
          '50%': { 
            transform: 'translateY(-12px) scale(1.02)',
            opacity: '0.9'
          },
        },
        bubbleRise1: {
          '0%': { 
            transform: 'translateY(100vh) translateX(0) scale(0.8)',
            opacity: '0'
          },
          '10%': { 
            opacity: '0.4'
          },
          '90%': { 
            opacity: '0.4'
          },
          '100%': { 
            transform: 'translateY(-100px) translateX(20px) scale(1.2)',
            opacity: '0'
          },
        },
        bubbleRise2: {
          '0%': { 
            transform: 'translateY(100vh) translateX(0) scale(1)',
            opacity: '0'
          },
          '10%': { 
            opacity: '0.3'
          },
          '90%': { 
            opacity: '0.3'
          },
          '100%': { 
            transform: 'translateY(-100px) translateX(-30px) scale(0.9)',
            opacity: '0'
          },
        },
        bubbleRise3: {
          '0%': { 
            transform: 'translateY(100vh) translateX(0) scale(0.7)',
            opacity: '0'
          },
          '10%': { 
            opacity: '0.35'
          },
          '90%': { 
            opacity: '0.35'
          },
          '100%': { 
            transform: 'translateY(-100px) translateX(40px) scale(1.1)',
            opacity: '0'
          },
        },
        bubbleRise4: {
          '0%': { 
            transform: 'translateY(100vh) translateX(0) scale(0.9)',
            opacity: '0'
          },
          '10%': { 
            opacity: '0.25'
          },
          '90%': { 
            opacity: '0.25'
          },
          '100%': { 
            transform: 'translateY(-100px) translateX(-25px) scale(1.15)',
            opacity: '0'
          },
        },
        bubbleRise5: {
          '0%': { 
            transform: 'translateY(100vh) translateX(0) scale(0.85)',
            opacity: '0'
          },
          '10%': { 
            opacity: '0.3'
          },
          '90%': { 
            opacity: '0.3'
          },
          '100%': { 
            transform: 'translateY(-100px) translateX(35px) scale(1.05)',
            opacity: '0'
          },
        },
        bubbleRise6: {
          '0%': { 
            transform: 'translateY(100vh) translateX(0) scale(0.75)',
            opacity: '0'
          },
          '10%': { 
            opacity: '0.4'
          },
          '90%': { 
            opacity: '0.4'
          },
          '100%': { 
            transform: 'translateY(-100px) translateX(-40px) scale(1.25)',
            opacity: '0'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
