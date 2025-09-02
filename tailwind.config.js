/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        slate: {
          850: '#1e293b',
          950: '#020617',
        },
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};