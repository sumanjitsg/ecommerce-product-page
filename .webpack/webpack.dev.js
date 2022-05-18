const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
  ],
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
});