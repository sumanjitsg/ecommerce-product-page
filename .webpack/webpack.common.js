const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../dist');

const common = {
  context: SRC_PATH,
  entry: {
    index: './js/index.js',
  },
  output: {
    path: DIST_PATH,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [ 'html-loader' ],
      },
      {
        test: /\.(svg|png|jpg)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
  ],
};

module.exports = { SRC_PATH, DIST_PATH, common };