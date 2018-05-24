const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const webpack = require('webpack');

module.exports = {
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
                use:[
                        {
                            loader: 'url-loader',
                            options: {
                                limit:100000,
                                name:path.join("img/[name].[hash].[ext]")
                            }
                        }
                    ]
            },
            // font loader
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit:100000,
                            name:path.join("img/[name].[hash].[ext]")
                        }
                    }
                ]
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
                            resources: path.resolve(__dirname,'../theme/common/common.less')
                        },
                    }
                ]
            },
            {
                test:/\.san$/,
                use:'san-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [ 'html-loader' ]
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
            template:'./build/index.html',
            inject:true,
            title:'index',
            minify:{
                removeComments:false
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};