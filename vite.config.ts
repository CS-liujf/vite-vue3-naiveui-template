import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import {createHtmlPlugin} from 'vite-plugin-html'
import {visualizer} from 'rollup-plugin-visualizer'
import {resolve} from 'path'

function pathResolve(dir: string): string {
  return resolve(__dirname, dir)
}

export default ({mode}) => {
  return defineConfig({
    plugins: [
      vue(),
      Components({resolvers: [NaiveUiResolver()]}),
      createSvgIconsPlugin({
        iconDirs: [pathResolve('src/assets/icons')],
        symbolId: 'icon-[name]'
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: loadEnv(mode, './').VITE_APP_TITLE
          }
        }
      }),
      visualizer({
        filename: 'dist/analysis.html',
      })
    ],
    resolve: {
      alias: [{find: '@', replacement: pathResolve('src')}]
    },
    server: {
      open: true
      // proxy: {
      //   '/api': {
      //     target: 'https://your.url'
      //   }
      // }
    },
    base: './'
  })
}
