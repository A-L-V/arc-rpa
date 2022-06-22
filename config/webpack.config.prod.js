const path = require('path');

const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')


const { CleanWebpackPlugin} = require('clean-webpack-plugin');

const prodConfig = {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(), 
    ],
}
module.exports = merge(common,prodConfig)


