
import { defineConfig } from 'vite'
import { createVuePlugin  } from 'vite-plugin-vue2'
import usePluginImport from 'vite-plugin-importer'
// import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  plugins: [
    createVuePlugin(),
    usePluginImport({
      libraryName: "@dcloudio/uni-ui",
      customName: (name) => {
        console.log('name: ', name)
        return `@dcloudio/uni-ui/lib/${name}/${name}.vue`
      }
    })
  ],
  test: {
    environment: 'jsdom',
        coverage: {
            provider: 'c8' 
        }
  }
})