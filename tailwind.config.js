module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1F2937', // Example primary color
        secondary: '#3B82F6', // Example secondary color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};