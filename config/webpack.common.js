const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '../src/index.js'),
    mode: 'production',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[contenthash].bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,"../public/index.html")
        }),
        new CleanWebpackPlugin(),
    ],
    module:{
        rules: [
            {
              use: "babel-loader",
              test: /.(js|jsx)$/,
              exclude: /node_modules/,
            },
            {
              type: "asset",
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
            }
          ]
    }
}