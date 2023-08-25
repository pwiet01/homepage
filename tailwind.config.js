import * as daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      flex: {
        2: '2 2 0%',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['dracula'],
  },
};
