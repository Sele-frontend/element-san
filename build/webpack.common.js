const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebPackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const webpack = require('webpack');

module.exports = {
    mode: NODE_ENV,
    entry: {
        app: path.resolve(__dirname, '../example/main.js'),
    },
    output: {
        path: path.resolve(__dirname,'../dist/'),
        filename: '[name]-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [path.resolve(__dirname, './node_modules')],
                use: 'babel-loader',
            },
            // image loader
            {
                test:/\.(png|jpg|gif|jpeg)$/,
                use:'url-loader?limit=100000'
            },
            // font loader
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use: [{loader: 'url-loader'}]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'less-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            // Provide path to the file with resources
                            resources: path.resolve(__dirname,'../theme/common.less')
                        },
                    }
                ]
            },
            {
                test:/\.san$/,
                use:'san-loader'
            }
        ],
    },
    resolve: {
        alias: {
            san:
                NODE_ENV === 'production'
                    ? 'san/dist/san.js'
                    : 'san/dist/san.dev.js',
        },
    },
    plugins:[
        new htmlWebPackPlugin({
            filename:'index.html',
            templete:'./index.html',
            inject:true,
            title:'index',
            minify:{
                removeComments:false
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};