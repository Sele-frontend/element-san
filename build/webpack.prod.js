const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const path = require('path');

module.exports = webpackMerge(commonConfig,{
    mode: 'production',
    devtool: 'source-map',
    entry: {
        app: path.resolve(__dirname, '../package/index.js'),
    },
    output: {
        path: path.resolve(__dirname,'../dist/'),
        filename: 'element-san.min.js',
        libraryTarget:'umd',
        umdNamedDefine:true
    },
    plugins:[
        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
            sourceMap: true
        }),
        new MiniCssExtractPlugin({
            filename:"element-san.min.css"
        })
    ]
})