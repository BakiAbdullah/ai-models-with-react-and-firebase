/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d3f7a0",

          secondary: "#f285c1",

          accent: "#0ece71",

          neutral: "#282C3E",

          "base-100": "#F2F3F7",

          info: "#8DC5F6",

          success: "#5CE0B8",

          warning: "#F3B559",

          error: "#FB282C",
        },
      },
    ],
  },
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};

