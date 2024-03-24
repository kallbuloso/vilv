import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import eslintPlugin from 'vite-plugin-eslint'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { resolve } from 'path'

// https://www.npmjs.com/package/vuetify-more-component
// https://www.npmjs.com/package/vuetify3-mask-field
// https://www.npmjs.com/package/v-phone-number

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.js',
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls
      }
    }),
    vuetify({
      autoImport: true
    }),
    eslintPlugin(),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        {
          '@inertiajs/vue3': ['router', 'usePage', 'useForm']
        }
      ]
    }),
    Icons({
      autoInstall: true
    }),
    Components({
      dirs: [
        './resources/js/Components', // components
        './resources/js/Layouts', // layouts
        './resources/js/Transitions' // transitions
      ],
      extensions: ['vue'],
      directoryAsNamespace: true,
      deep: true,
      resolvers: [
        Vuetify3Resolver(),
        IconsResolver(),
        (name) => {
          if (name === 'Head') {
            return {
              importName: 'Head',
              path: '@inertiajs/vue3'
            }
          }

          if (name === 'Link') {
            return {
              importName: 'Link',
              path: '@inertiajs/vue3'
            }
          }
        }
      ]
    }),
    {
      name: 'vite:inertia:layout',
      enforce: 'pre',
      transform: (code, id) => {
        const layoutRegex = /<template +layout(?: *= *['"](?:(?:([\w|,]+):)?([\w|,]+))['"] *)?>/

        if (!layoutRegex.test(code)) {
          return code
        }

        const isTypeScript = /lang=['"]ts['"]/.test(code)

        return code.replace(layoutRegex, (_, __, layoutNames) => {
          const layoutImports = layoutNames.split(',').map((layoutName) => `import ${layoutName} from '@/Layouts/${layoutName}.vue'`)

          const newCode = `
                <script${isTypeScript ? ' lang="ts"' : ''}>
                ${layoutImports.join('\n')}
                export default {
                  layout: [${layoutNames}]
                }
                </script>
                <template>
              `

          return newCode
        })
      }
    }
  ],

  // Uncomment this if you're not inside Docker
  server: {
    port: 3000
  },

  // Delete this if you're not inside docker
  // and uncomment above
  //   server: {
  //     host: '0.0.0.0',
  //     port: 3000,
  //     hmr: {
  //       host: 'localhost',
  //       port: 3000
  //     }
  //   },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'resources/js')
    }
  }
})
