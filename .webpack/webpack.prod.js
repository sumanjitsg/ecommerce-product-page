const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { merge } = require('webpack-merge');
const { DIST_PATH, common } = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    assetModuleFilename: 'assets/[name].[contenthash][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),
  ],
  devServer: {
    static: {
      directory: DIST_PATH,
    },
    port: 3030,
    open: {
      app: {
        name: 'chrome',
      },
    },
    compress: true,
  },
});