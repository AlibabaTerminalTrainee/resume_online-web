const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/baiduApi": {
        target: "http://api.map.baidu.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/baiduApi": "/reverse_geocoding/v3/", // 代理的路径
        },
      },
    },
  },
  lintOnSave: false, // 取消语法检查
});
