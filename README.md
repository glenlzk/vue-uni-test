# uni-pro-test2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### 补充说明：

https://zh.uniapp.dcloud.io/quickstart-cli.html

----------------------------------


vue2 :

@dcloudio/uni-app  版本依赖： "@vue/composition-api": "^1.7.0"  --->   "peerDependencies":  "vue": ">= 2.5 < 2.7"

uniapp 不支持vue2.7


@vue/composition-api  组合式 API 是 Vue 3 及 Vue 2.7 的内置功能

https://cn.vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api
https://github.com/dcloudio/composition-api/blob/main/README.zh-CN.md
https://juejin.cn/post/6966813426291048455


@dcloudio/uni-app强制升级至vue2.7??
找到一个@dcloudio/uni-app版本不依赖@vue/composition-api，再指定升级至vue2.7


重点：
@vitejs/plugin-vue2  适配vue2.7
vite-plugin-vue2  适配vue2.6及以前版本



创建 vitest.config.ts，优先级将会最高
将 --config 选项传递给 CLI，例如 vitest --config ./path/to/vitest.config.ts


@vue/test-utils 也有对应vue版本限制
https://v1.test-utils.vuejs.org/guides/getting-started.html


参阅资料：
官网：
https://cn.vitest.dev/guide/

https://v1.test-utils.vuejs.org/guides/getting-started.html

https://www.imooc.com/article/328557

测试工程：
https://stackblitz.com/edit/vitejs-vite-hu1crh?file=vite.config.js


### easycom模式使vue组件无需引入即可使用
https://blog.csdn.net/weixin_40013817/article/details/105612630



### test-utils
最新文档
https://test-utils.vuejs.org/guide/
基于vue2文档
https://v1.test-utils.vuejs.org/zh/


### vitest中文文档
https://cn.vitest.dev/guide/features.html



### 其他
uniapp + vue3 + ts + vite + uniui 搭建
https://blog.csdn.net/m0_50233142/article/details/124721137



