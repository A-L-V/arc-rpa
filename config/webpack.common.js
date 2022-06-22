const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    mode:'production',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: { 
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash].js',//(optimizacion); filename: 'main.js', (default)
        assetModuleFilename: 'assets/images/[hasg][ext][query]'  //loader de fuentes
        },
    resolve: {
        extensions: ['.js','.jsx'],
        alias: {  //alias

        } 
    },
    module: { 
        rules: [
            {   //loader babel
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,   
                use: {
                    loader: 'babel-loader'
                },
            },
            {   //html
                test: /\.html$/,
                use: [{loader:'html-loader'}]
            },
            {   //css o stilos
                test: /\.css$/i, //preprocesadorres o procesadores, test: /\.css|.styl$/i,
                use: [CssMinimizerPlugin.loader, 
                    'css-loader',
                    //'stylus-loader'
                ],
            },
            {     //loader de images
                test:  /\.png/, 
                type: 'asset/resource'
            },
            {
                //loader de fuentes
                test:  /\.(woff|woff2)$/,  
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff',
                        name: "[name].[contenthash].[ext]",//(optimizacion) name: "[name].[ext]",(default)
                        outputPath: "./assets/fonts/",
                        publicPath: "../assets/fonts/",
                        esModule: false,
                    },
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            inject: true,
        }),
        new CssMinimizerPlugin({
            filename: 'assets/[name].[contenthash].css'  //optimizacion
        }),
        /*new CopyPlugin({     //mover recursos
            patterns: [
                {
                    from: path.resolve(__dirname, "../src","assets/images"),
                    to: "assets/images"
                }
            ]
        }),*/
        new Dotenv(),  //variables de entorno
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }
}