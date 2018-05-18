let webpackMerge = require('webpack-merge');
let commonConfig = require('./webpack.common');
let path = require("path");

module.exports = webpackMerge(commonConfig,{
        devtool:"eval-source-map",
        devServer: {
        contentBase:path.resolve(__dirname,"../dist"),
            historyApiFallback:true,
            inline:true
       }
})