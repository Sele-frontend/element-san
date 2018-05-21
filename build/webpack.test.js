const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig,{
    rules:[
        {
            //利用istanbul测试代码覆盖率
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
})