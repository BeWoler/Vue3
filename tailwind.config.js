/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {},
    minWidth: {
      50: "50px",
      100: "100px",
      150: "150px",
      200: "200px",
      250: "250px",
      300: "300px",
    },
    minHeight: {
      100: "100px",
    },
    maxHeight: {
      200: "200px",
      300: "300px",
    },
    colors: {
      red: "red",
      white: "#fff",
      black: "#000",
    },
  },
  plugins: [],
};
