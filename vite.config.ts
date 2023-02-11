import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import vuePlugin from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        symfonyPlugin(),
        vuePlugin()
    ],
    publicDir: false,
    root: '.',
    base: '/build/',
    build: {
      manifest: true,
      emptyOutDir: true,
      assetsDir: '',
      outDir: './public/build',
      rollupOptions: {
        input: {
          main: './assets/main.ts',
          app: './assets/ts/app.ts',
        },
      },
    },
});
