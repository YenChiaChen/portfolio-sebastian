/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(180deg)' },
        }
      },
      animation: {
        flip: 'flip 500ms ease-in-out',
      }
    },
  },
  plugins: [require("daisyui")],
}

