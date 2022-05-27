const path = require('path');
const { merge } = require('webpack-merge');
const { common, SRC_PATH, DIST_PATH } = require('./webpack.common');

const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    clean: true,
  },
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
      filename: 'css/styles.[contenthash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(SRC_PATH, 'assets'),
          to: path.join(DIST_PATH, 'assets'/*, '[name].[contenthash][ext]'*/),
        },
      ],
    }),
  ],
  devServer: {
    port: 3030,
    compress: true,
  },
});