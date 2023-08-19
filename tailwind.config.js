/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#252525',
          DEFAULT: '#141414',
        },
        primary: {
          light: '#c07cff',
          DEFAULT: '#a94bff',
          dark: '#8017d9',
        },
      },
    },
  },
  plugins: [],
};
