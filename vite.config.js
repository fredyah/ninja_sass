import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ninja_sass/', // 将 'my-repo' 替换为你的仓库名称
  plugins: [vue()],
})
