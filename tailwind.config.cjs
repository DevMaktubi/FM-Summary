/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Hanken Grotesk, sans-serif",
      },
      fontSize: {
        xl: 72,
        l: 32,
        m: 24,
        body: 18,
      },
      colors: {
        "gradient-1": {
          from: "#2F2CE9",
          to: "#7755FF",
        },
        "gradient-2": {
          from: "#2521C9",
          to: "#4D21C9",
        },
        yellow: "#FFB21E",
        blue: "#1125D6",
        green: "#00BB8F",
        red: "#FF5555",
        "dark-navy": "#303B59",
        "light-blue": "#CAC9FF",
        "very-light-blue": "#ECF2FF",
      },
    },
  },
  plugins: [],
};
