const path = require('path');
const { merge } = require('webpack-merge');
const { common, SRC_PATH, DIST_PATH } = require('./webpack.common');

const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].bundle.js',
    clean: true,
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
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(SRC_PATH, 'assets'),
          to: path.join(DIST_PATH, 'assets'),
        },
      ],
    }),
  ],
  devServer: {
    port: 3000,
  },
});