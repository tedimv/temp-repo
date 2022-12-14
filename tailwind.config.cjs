/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  important: {},
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      colors: {
        primary: '#0ea5e9', // sky 500
        secondary: '#f43f5e' // rose 500
      }
    }
  },
  plugins: []
};
