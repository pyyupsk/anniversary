import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import autoimport from 'unplugin-auto-import/vite'
import unused from 'unplugin-unused/vite'
import components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    autoimport({
      dts: true,
      imports: ['vue'],
    }),
    components({
      dts: true,
    }),
    unused(),
  ],
})
