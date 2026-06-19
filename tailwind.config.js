/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        denr: {
          green:      '#1a7a3a',
          'green-light': '#28a74f',
          'green-pale':  '#e8f5ec',
          blue:       '#0d5ea6',
          'blue-light':  '#1a7fd4',
          'blue-pale':   '#e8f2fc',
          gray:       '#4a5568',
          'gray-light':  '#f7f8fa',
        },
      },
      animation: {
        'blink':   'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        blink:  { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
        fadeUp: { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
