import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'
import minify from 'vite-plugin-minify'
import legacy from '@vitejs/plugin-legacy'

export default {
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
}
