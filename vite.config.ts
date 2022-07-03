import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'
import minify from 'vite-plugin-minify'

export default {
  plugins: [
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
