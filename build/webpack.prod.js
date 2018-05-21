const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = webpackMerge(commonConfig,{
    mode: 'production',
    devtool: 'source-map',
    entry: {
        app: path.resolve(__dirname, '../example/main.js'),
    },
    output: {
        path: path.resolve(__dirname,'../dist/'),
        filename: 'js/[name]-[hash].js'
    },
    plugins:[
        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
            sourceMap: true
        })
    ],
    optimization:{
        splitChunks:{
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 3
                },
                vendor: {
                    test: /node_modules[\\/](?!san)/,
                    chunks: 'all',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                },
                san: {
                    test: /[\\/]san/,
                    chunks: 'all',
                    name: 'san',
                    priority: 10,
                    enforce: true
                }
            }
        }
    }
})