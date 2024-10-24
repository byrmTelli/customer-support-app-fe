/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
          "75%": { transform: "rotate(-15deg)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
