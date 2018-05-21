let webpackMerge = require('webpack-merge');
let commonConfig = require('./webpack.common');

let path = require("path");

module.exports = webpackMerge(commonConfig,{
        devtool:"eval-source-map",
        rules:[
            {
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
            hot:true,
            compress:true
       }
})