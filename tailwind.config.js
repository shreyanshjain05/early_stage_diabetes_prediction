/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        arima: ['Arima', 'sans-serif'],
        albert: ['Albert Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
