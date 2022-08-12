import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    Unocss(),
    AutoImport({
      imports: ['vue', 'vue/macros'],
      dts: true,
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),
  ],
});
