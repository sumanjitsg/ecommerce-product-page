const { merge } = require('webpack-merge');
const { common } = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ]
  },
  devServer: {
    port: 3000,
  },
});