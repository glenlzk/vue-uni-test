const babelImport = require('babel-plugin-import');
const babel = require('@babel/core');
const path = require('path');
const importMeta = require('@babel/plugin-syntax-import-meta');

function usePluginImport(options) {

  return {
    name: 'vite-plugin-importer',

    transform(code, id) {
      console.log(`id： `, id)
      if (/\.(?:[jt]sx?|vue)$/.test(id) && !/node_modules\/vite/.test(id)) {
        console.log(`22id： `, id)
      // D:\workspace\uni-pro-test2\src\pages\index\index.vue
      // if (/\/pages\/index\/index\.vue$/.test(id) && !/node_modules\/vite/.test(id)) {
        const plugins = [importMeta, [babelImport, options]]
        // const plugins = ['import', options]

        /* return {
          code: code.replace("@dcloudio/uni-ui", '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue'),
          map: null
        } */
        const result = babel.transformSync(code, {
          ast: true,
          plugins,
          sourceFileName: id,
          filename: path.resolve('babel.config.js')
        })

        return {
          code: result.code,
          map: result.map
        }
      }
    },
  };
};

module.exports = usePluginImport
