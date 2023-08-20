import * as daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {},
  plugins: [daisyui],
  daisyui: {
    themes: ['dracula'],
  },
};
