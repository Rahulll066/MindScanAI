/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#b3e6ff',
          200: '#80d4ff',
          300: '#4dc3ff',
          400: '#1ab2ff',
          500: '#00bcff', // main teal-blue
          600: '#0096cc', // dark teal-blue
          700: '#0077a3',
          800: '#005c80',
          900: '#004f80',
        },
      },
    },
  },
  plugins: [],
}

