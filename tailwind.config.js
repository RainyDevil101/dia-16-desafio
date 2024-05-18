/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1.6rem', // Cambiado a 1.6rem
      xl: '2rem', // Anteriormente era '1.25rem'
      '2xl': '2.5rem', // Anteriormente era '1.563rem'
      '3xl': '3.125rem', // Anteriormente era '1.953rem'
      '4xl': '3.9rem', // Anteriormente era '2.441rem'
      '5xl': '4.88rem', // Anteriormente era '3.052rem'
      '6xl': '6.1rem', // Nuevo tamaño 6xl
      '7xl': '7.625rem', // Nuevo tamaño 7xl
    },
    extend: {},
  },
  plugins: [],
}

