import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'money-rain': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(120px)', opacity: '0' }
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink': {
          '50%': { opacity: '0' }
        },
        'code-scroll': {
          'from': { transform: 'translateY(0)' },
          'to': { transform: 'translateY(-50%)' }
        },
        'draw': {
          'from': { 
            strokeDasharray: '1000',
            strokeDashoffset: '1000',
            opacity: '0'
          },
          '20%': {
            opacity: '1'
          },
          'to': { 
            strokeDasharray: '1000',
            strokeDashoffset: '0',
            opacity: '1'
          }
        },
        'draw-circle': {
          'from': { 
            strokeDasharray: '500',
            strokeDashoffset: '500',
            opacity: '0'
          },
          'to': { 
            strokeDasharray: '500',
            strokeDashoffset: '0',
            opacity: '1'
          }
        },
        'draw-triangle': {
          'from': { 
            strokeDasharray: '400',
            strokeDashoffset: '400',
            opacity: '0'
          },
          'to': { 
            strokeDasharray: '400',
            strokeDashoffset: '0',
            opacity: '1'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'scroll-up': {
          'from': { transform: 'translateY(0)' },
          'to': { transform: 'translateY(-50%)' }
        },
        'briefcase-sequence': {
          '0%': { 
            transform: 'rotate(0deg)',
            opacity: '1'
          },
          '40%': {
            transform: 'rotate(-110deg)',
            opacity: '1'
          },
          '100%': {
            transform: 'rotate(-110deg)',
            opacity: '0'
          }
        },
        'reveal-money': {
          '0%': { opacity: '0' },
          '40%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'reveal-flying-money': {
          '0%': { opacity: '0' },
          '60%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'chalk-appear': {
          'from': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'chalk-mark': {
          'from': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          'to': {
            opacity: '0.5',
            transform: 'scale(1)'
          }
        },
        'subtle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' }
        }
      },
      animation: {
        'money-rain': 'money-rain 2s infinite',
        'typing': 'typing 3s steps(30, end) infinite',
        'blink': 'blink 1s step-end infinite',
        'code-scroll': 'code-scroll 10s linear infinite',
        'draw': 'draw 2.5s ease-out forwards',
        'draw-circle': 'draw-circle 2s ease-out forwards',
        'draw-triangle': 'draw-triangle 2s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'scroll-up': 'scroll-up 10s linear infinite',
        'briefcase-sequence': 'briefcase-sequence 1.5s ease-out forwards',
        'reveal-money': 'reveal-money 2s ease-out forwards',
        'reveal-flying-money': 'reveal-flying-money 2.5s ease-out forwards',
        'chalk-appear': 'chalk-appear 0.5s ease-out forwards',
        'chalk-mark': 'chalk-mark 0.3s ease-out forwards',
        'subtle-bounce': 'subtle-bounce 2s ease-in-out infinite'
      },
      boxShadow: {
        'chalk': '2px 2px 4px rgba(0, 0, 0, 0.1)',
        'board': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
};

export default config;