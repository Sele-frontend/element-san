const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const htmlWebPackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = webpackMerge(commonConfig,{
        mode: 'development',
        entry: {
            app: path.resolve(__dirname, '../example/main.js'),
        },
        output: {
            path: path.resolve(__dirname,'../dist/'),
            filename: 'js/[name]-[hash].js'
        },
        devtool: 'source-map',

        devServer: {
            contentBase:path.resolve(__dirname,"../dist"),
            historyApiFallback:true,
            inline:true,
            hot:true,   //  热加载
            compress:true,  //  压缩
            watchOptions: {
                ignored: /node_modules/
            }
       },

    plugins:[
        new htmlWebPackPlugin({
            filename:'index.html',
            template:'./build/index.html',
            inject:true,
            title:'index',
            minify:{
                removeComments:false
            }
        }),
    ]
})