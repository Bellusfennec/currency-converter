/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      sd: "520px",
      md: "768px",
      lg: "976px",
      xg: "1324px",
      xl: "1440px"
    },
    extend: {}
  },
  plugins: []
};
