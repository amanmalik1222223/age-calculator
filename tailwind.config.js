/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleCustom: 'rgb(178, 0, 255)', 
        primary: '#007BFF', 
        secondary: '#ffffff', 
        customGreen: '#10DFA8',
        cutomOrange: '#FF5757',
      },
      textColor: {
        customPurple: 'rgb(178, 0, 255)', 
      },
      backgroundColor: {
        primary: '#007BFF', 
        secondary: '#ffffff',
      },
    },
  },
  plugins: [],
}
