/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Roboto"],
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#1A1A1A",
        rear: "#D4AF37",
        html: "#e34c26",
        cplus: "#5E97D0",
        javascript: "#f0db4f",
        java: "#f89820",
        mysql: "#00758f",
        mongo: "#589636",
        ganashe: "#e4a663",
        react: "#61dafb",
        next: "#f8f9fa",
        node: "#68A063",
        redux: "#764abc",
        tailwind: "#525252",
      },
    },
  },
  plugins: [],
}
