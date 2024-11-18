// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        car: "moveCar 3s ease-in-out forwards",
        "line-draw": "lineDraw 5s ease-in-out forwards",
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        moveCar: {
          "0%": { left: "-300px" },
          "100%": {
            left: "42%",
            transform: "translateX(-50%) translateY(-50%)",
          },
          "@media (max-width: 1024px)": {
            "100%": {
              left: "70%",
              transform: "translateX(-50%) translateY(-50%)",
            },
          },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.13)", opacity: "1.5" },
        },
      },
      colors: {
        white: "#FFF",
        "general-text": "#00FF91",
      },
    },
  },
  plugins: [],
};
