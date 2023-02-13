const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '450px',
      sm: '640px',
      md: '768px',
      mdb: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        monserret: ["monserret", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#3E63EB",
        light: "#f1f3fe",
      },
      animation: {
        'enter-opacity': 'enterOpacity 300ms ease-out',
        'enter': 'enter 300ms ease-out',
        'scale': 'scale 200ms ease-in-out',
      },
      keyframes: {
        enterOpacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        enter: {
          '0%': { opacity: '0', transform: 'scale(.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scale: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        }
      },
    },
  },
  plugins: [],
}
