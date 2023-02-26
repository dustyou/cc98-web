const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    // host: 'localhost',   // ip 本地
    open: true,          // 配置自动启动浏览器
    port: 80           // 设置端口号
    // proxyTable: {
    //   '/login': {
    //     target: 'http://localhost:8081',//这里是后端SpringBoot的接口域名和端口号 别忘了加http
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '/login': '/login'
    //     }
    //   }
    // },
  },
  lintOnSave: false // 关闭eslint
})
