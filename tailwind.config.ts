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
        }
      },
      animation: {
        'money-rain': 'money-rain 2s infinite',
        'typing': 'typing 3s steps(30, end) infinite',
        'blink': 'blink 1s step-end infinite',
        'code-scroll': 'code-scroll 10s linear infinite',
        'draw': 'draw 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'scroll-up': 'scroll-up 10s linear infinite'
      }
    },
  },
  plugins: [],
};

export default config;