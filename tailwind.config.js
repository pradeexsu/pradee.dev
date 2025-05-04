/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '500px',
      },
      boxShadow: {
        marker: '0px 3px 7.5px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        intro: 'intro 0.3s forwards ease-in-out',
      },
      keyframes: {
        intro: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
