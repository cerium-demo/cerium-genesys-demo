module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "serif"],
    },
    extend: {
      colors: {
        primary: "#0076FF",
        "primary-light": "#A4C3FF",
      },
    },
  },
  plugins: [],
}
