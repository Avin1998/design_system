/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors matching the current design
        'dark-bg': '#0d0d17',
        'card-bg': '#1a1a2f',
        'nav-bg': '#1a1a2f',
        'blue-primary': '#0066ff',
        'blue-light': '#66b3ff',
        'blue-hover': '#0080ff',
        'text-primary': '#eee',
        'text-secondary': '#aaa',
        'text-light': '#b3b3b3',
      },
      backgroundColor: {
        'glass': 'rgba(255,255,255,0.07)',
        'glass-hover': 'rgba(255,255,255,0.1)',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #0066ff, #003d99)',
        'blue-gradient-hover': 'linear-gradient(135deg, #0080ff, #0052cc)',
        'card-gradient': 'linear-gradient(135deg, #1a1a2f, #2d2d44)',
      },
      boxShadow: {
        'blue': '0 4px 12px rgba(0, 102, 255, 0.3)',
        'blue-lg': '0 8px 24px rgba(0, 102, 255, 0.4)',
        'card': '0 4px 12px rgba(0,0,0,0.6)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.8)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      animation: {
        'pro-glow': 'proGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        proGlow: {
          '0%': {
            opacity: '0.7',
            transform: 'scale(1)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1.1)',
          },
        },
      },
    },
  },
  plugins: [],
}