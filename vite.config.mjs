import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'node:path'

export default defineConfig({
  // ✅ 关键修复：设置正确的 base 路径，和你的仓库名完全一致
  base: '/calabiyauify-names/',
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          // ✅ 修正：src 改为项目根目录的 index.html，避免打包时找不到文件
          src: 'index.html',
          dest: '',   // 复制到 dist 根目录
          rename: '404.html'
        }
      ]
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})