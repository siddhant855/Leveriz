
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#00ffc3',
          dark: '#a3cc00',
        },
        secondary: {
          DEFAULT: '#0a0a0a',
          foreground: '#f1f1f1',
        },
        dark: {
          DEFAULT: '#111',
          darker: '#0d0d0d',
          gray: '#2c2c2c',
        },
        light: '#f1f1f1',
        gray: '#bbb',
        success: '#4caf50',
        warning: '#ff9800',
        danger: '#f44336',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'lg': '0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.05)',
        'primary': '0 0 10px rgba(0, 255, 195, 0.5)',
        'primary-lg': '0 0 20px rgba(0, 255, 195, 0.8)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'glow': {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(0, 255, 195, 0.5), 0 0 20px rgba(0, 255, 195, 0.3)',
            opacity: 1
          },
          '50%': { 
            boxShadow: '0 0 15px rgba(0, 255, 195, 0.8), 0 0 30px rgba(0, 255, 195, 0.5)', 
            opacity: 0.8
          },
        },
        'pulse-grow': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'neon-pulse': {
          '0%, 100%': { textShadow: '0 0 4px #00ffc3, 0 0 11px #00ffc3, 0 0 19px #00ffc3' },
          '50%': { textShadow: '0 0 4px #00ffc3, 0 0 15px #00ffc3, 0 0 25px #00ffc3' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-grow': 'pulse-grow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 0.5s forwards',
        'slide-in-left': 'slide-in-left 0.5s forwards',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-up': 'fade-up 0.7s ease-out',
        'fade-down': 'fade-down 0.7s ease-out',
        'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'clash': ['Clash Display', 'sans-serif'],
        'space': ['Space Grotesk', 'monospace'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
