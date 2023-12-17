import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import VueRouter from 'unplugin-vue-router/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueRouter({
    extensions: ['.vue'],
  }), vue(), Layouts()],
})
