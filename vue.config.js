module.exports = {
	devServer: {
      proxy: {
      '/api': {// 匹配所有以 '/api1'开头的请求路径
        target: 'https://u.mirinda.com.cn/ceshi',
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      }
    }
  }
}
