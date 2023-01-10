import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'
import minify from 'vite-plugin-minify'
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/gsap-basic/',
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    handlebars({
      compileOptions: {
        // Example config option: avoid auto-indenting partials
        preventIndent: true,
      },
      partialDirectory: resolve(__dirname, 'src'),
    }),
    minify({}),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://openapi.meituan.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
