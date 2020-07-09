const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    devServer: {
        port: '9898'
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({ // 把px单位换算成rem单位
                        rootValue: 75, // 换算的基数(设计图750的根字体为75)
                        // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                        propList: ['*']
                    })
                ]
            }
        }
    },
    configureWebpack: (config) => {
        const plugins = [
            new webpack.DefinePlugin({
                test: Boolean(process.env.VUE_APP_ENV)
            }),
        ]
        if (config.mode == 'production') plugins.push(new BundleAnalyzerPlugin())
        return {
            plugins,
            externals: {
              'vue': 'Vue',
              'vue-router': 'VueRouter',
              'vuex': 'Vuex',
              'axios': 'axios',
              'xlsx': 'XLSX',
              'moment': 'moment',
              'decimal.js': 'Decimal'
            }
        }
    },
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    // 设置打包目录
    publicPath: './',
    //配置全局样式变量
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
}
