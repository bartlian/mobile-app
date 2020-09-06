module.exports = {
  // 配置sass（css编译工具）
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/css/global.scss";`
      }
    }
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://192.168.0.102:9999',
        ws: true,
        changeOrigin: true,
      },
    }
  }
}