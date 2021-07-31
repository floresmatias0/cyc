const common = require('./webpack.common');
const {merge} = require('webpack-merge');

/** @type {import('webpack').Configuration} */

const prodConfig = {
    mode:"production",
    devtool:"source-map",
    optimization:{
        splitChunks:{
            chunks:"all"
        }
    },
    module: {
        rules: [
          {
            test: /\.css|sass|scss$/i,
            use:["style-loader", "css-loader", "sass-loader"],
          },
        ],
      },
}

module.exports = merge(common,prodConfig )