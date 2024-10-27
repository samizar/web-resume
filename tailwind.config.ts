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
          'from': { strokeDashoffset: '1000' },
          'to': { strokeDashoffset: '0' }
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
        'car-move': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        'wheel-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'exhaust-smoke': {
          '0%': { opacity: '0', transform: 'translateY(0) scale(0.5)' },
          '50%': { opacity: '1', transform: 'translateY(-20px) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-40px) scale(1.5)' },
        },
        'brake-smoke': {
          '0%': { opacity: '0', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.5)' },
          '100%': { opacity: '0', transform: 'scale(2)' },
        },
      },
      animation: {
        'money-rain': 'money-rain 2s infinite',
        'typing': 'typing 3s steps(30, end) infinite',
        'blink': 'blink 1s step-end infinite',
        'code-scroll': 'code-scroll 10s linear infinite',
        'draw': 'draw 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'scroll-up': 'scroll-up 10s linear infinite',
        'briefcase-sequence': 'briefcase-sequence 1.5s ease-out forwards',
        'reveal-money': 'reveal-money 2s ease-out forwards',
        'reveal-flying-money': 'reveal-flying-money 2.5s ease-out forwards',
        'car-move': 'car-move 10s linear infinite',
        'wheel-spin': 'wheel-spin 1s linear infinite',
        'exhaust-smoke': 'exhaust-smoke 2s ease-in-out infinite',
        'brake-smoke': 'brake-smoke 1s ease-out',
      }
    },
  },
  plugins: [],
};

export default config;
