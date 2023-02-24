const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    // host: 'localhost',   // ip 本地
    open: true,          // 配置自动启动浏览器
    port: 80           // 设置端口号
  },
  lintOnSave: false // 关闭eslint
})
