/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      animation: {
        "bounce-slow": "bounce 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },
      },

      boxShadow: {
        glow: "0 0 40px rgba(99,102,241,0.35)",
        "glow-lg": "0 0 80px rgba(99,102,241,0.45)",
      },

      backgroundImage: {
        aurora:
          "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(168,85,247,0.2), rgba(6,182,212,0.2))",
      },

      backdropBlur: {
        xs: "2px",
      },

      borderRadius: {
        "4xl": "2rem",
      },
    },
  },

  plugins: [],
};