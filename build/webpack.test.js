const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig,{
    devtool: 'inline-source-map',
    rules:[
        {
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'app'),
            exclude: path.join(__dirname, 'node_modules')
        },
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
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('test')
        })
    ]
})