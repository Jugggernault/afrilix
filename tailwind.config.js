/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FF4500",
        "primary-dark": "#CC3700",
      },
      keyframes: {
        swing: {
          "0%": {
            transform: "rotate(0deg)",
            animationTimingFunction: "ease-out",
          },
          "25%": {
            transform: "rotate(70deg)",
            animationTimingFunction: "ease-in",
          },
          "50%": {
            transform: "rotate(0deg)",
            animationTimingFunction: "linear",
          },
        },
        swing2: {
          "0%": {
            transform: "rotate(0deg)",
            animationTimingFunction: "linear",
          },
          "50%": {
            transform: "rotate(0deg)",
            animationTimingFunction: "ease-out",
          },
          "75%": {
            transform: "rotate(-70deg)",
            animationTimingFunction: "ease-in",
          },
        },
      },
      animation: {
        swing: "swing 1.2s linear infinite",
        swing2: "swing2 1.2s linear infinite",
      },
    },
  },
  plugins: [],
};
