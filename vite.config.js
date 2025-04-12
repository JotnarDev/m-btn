import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'MBtn',
      fileName: (format) => `m-btn.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@fortawesome/vue-fontawesome', '@fortawesome/fontawesome-svg-core'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});