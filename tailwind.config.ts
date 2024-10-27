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
        'scroll-up': {
          'from': { transform: 'translateY(0)' },
          'to': { transform: 'translateY(-50%)' }
        },
        'draw': {
          'from': { strokeDashoffset: '200' },
          'to': { strokeDashoffset: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'money-rain': 'money-rain 2s infinite',
        'typing': 'typing 3s steps(30, end) infinite',
        'scroll-up': 'scroll-up 10s linear infinite',
        'draw': 'draw 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};

export default config;