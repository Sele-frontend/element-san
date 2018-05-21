const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require("path");

module.exports = webpackMerge(commonConfig,{
        mode: 'development',

        devtool: 'source-map',

        rules:[
            {
                //利用istanbul进行单元测试
                test: /\.(js)$/,
                exclude: /node_modules/,
                include: /src|packages/,
                enforce: 'post',
                use: [{
                    loader: "istanbul-instrumenter-loader",
                    options: {
                        esModules: true
                    },
                }]
            },
        ],
        devServer: {
            contentBase:path.resolve(__dirname,"../dist"),
            historyApiFallback:true,
            inline:true,
            hot:true,//热加载
            compress:true,//压缩
            watchOptions: {
                ignored: /node_modules/
            }
       }
})