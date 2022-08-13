import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    Unocss({
      mode: 'vue-scoped',
    }),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        {
          echarts: [['init', 'echartsInit']],
        },
      ],
      dts: true,
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),
  ],
})
