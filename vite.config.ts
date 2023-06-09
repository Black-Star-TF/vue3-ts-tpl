import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/main.scss";'
      }
    }
  },
  server: {
    /** host 设置为 true 才可以使用 network 的形式，以 ip 访问项目 */
    host: true,
    /** 端口号 */
    port: 9999,
    /** 是否自动打开浏览器 */
    open: true,
    /** 是否开启 https */
    https: false,
    /** 跨域设置允许 */
    cors: false,
    /** 端口被占用时，是否直接退出 */
    strictPort: false,
    /** 接口代理 */
    proxy: {
      '/api': {
        target: 'host:port/',
        /** 接口是https是需要配置此项 */
        secure: false,
        /** 是否允许跨域 */
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', '')
      }
    }
  },
  build: {
    terserOptions: {
      compress: {
        /** 生产环境去除console */
        drop_console: true,
        /** 生产环境去除debugger */
        drop_debugger: true
      }
    }
  }
})
