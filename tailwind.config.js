/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0a192f',
          gold: '#d4af37',
          crimson: '#8b0000',
          cream: '#f5f5dc',
          royal: '#1a365d'
        },
        secondary: {
          blue: '#1e40af',
          green: '#065f46',
          purple: '#5b21b6'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'pulse-gold': 'pulseGold 3s infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
        'wave': 'wave 1.5s ease-in-out infinite',
        'text-reveal': 'textReveal 2s ease-out forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          'from': { 
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
            filter: 'brightness(1.1)'
          },
          'to': { 
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.8)',
            filter: 'brightness(1.2)'
          }
        },
        slideIn: {
          'from': { 
            transform: 'translateX(-100px)', 
            opacity: '0' 
          },
          'to': { 
            transform: 'translateX(0)', 
            opacity: '1' 
          }
        },
        pulseGold: {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.7)'
          },
          '50%': { 
            opacity: '0.8',
            boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)'
          },
          '70%': { 
            boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)'
          },
          '100%': { 
            boxShadow: '0 0 0 0 rgba(212, 175, 55, 0)'
          }
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        textReveal: {
          '0%': { 
            clipPath: 'inset(0 100% 0 0)',
            transform: 'translateX(-50px)'
          },
          '100%': { 
            clipPath: 'inset(0 0 0 0)',
            transform: 'translateX(0)'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-diplomatic': 'linear-gradient(135deg, #0a192f 0%, #1a365d 50%, #2c5282 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #f7ef8a 50%, #d4af37 100%)',
        'gradient-honors': 'linear-gradient(135deg, #0a192f 0%, #8b0000 50%, #d4af37 100%)',
        'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}