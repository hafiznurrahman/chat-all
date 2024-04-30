/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    colors: {
      dark1: "rgb(var(--dark1) / <alpha-value>)",
      dark2: "rgb(var(--dark2) / <alpha-value>)",
      dark3: "rgb(var(--dark3) / <alpha-value>)",
      light: "rgb(var(--light) / <alpha-value>)",
      blue1: "rgb(var(--blue1) / <alpha-value>)",
      blue2: "rgb(var(--blue2) / <alpha-value>)",
      blue3: "rgb(var(--blue3) / <alpha-value>)"
    },
      
    }
  },
  plugins: []
};
