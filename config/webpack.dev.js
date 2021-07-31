const webpack = require('webpack');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const path = require('path');

/** @type {import('webpack').Configuration} */

const devConfig = {
    mode:"development",
    devServer:{
        port:3000,
        publicPath: "", 
        contentBase: path.join(__dirname, '../dist'),
        open:"chrome",
        hot:true
    },
    target: "web",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
      ],
    devtool:"eval-source-map",
    module: {
        rules: [
          {
            test: /\.css|sass|scss$/i,
            use:["style-loader", "css-loader", "sass-loader"],
          },
          {
            type: "asset",
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
          }
        ],
      },
}

module.exports = merge(common,devConfig)