/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      dl: "880px",
      lg: "976px",
      xg: "1324px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
