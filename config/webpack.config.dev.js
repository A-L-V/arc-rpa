const path = require('path');

const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const {HotModuleReplacementPlugin} = require('webpack') 

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devConfig = {
    mode: "development",
    //devtool: 'source-map',     //webpack DevTools
    plugins: [ 
        new BundleAnalyzerPlugin(),
        new HotModuleReplacementPlugin(), 
        new ReactRefreshWebpackPlugin() 
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3000,
        compress: true,
        hot:true,  
    },
    target: "web"
}
module.exports = merge(common,devConfig)