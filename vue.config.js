module.exports = {
  publicPath:'./',
  productionSourceMap: false,
  //px转rem的配置（postcss-plugin-px2rem插件）
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue:75,      // 新版本是这个值
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ]
      }
    }
  }
}