const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve('src');
const DIST_PATH = path.resolve('dist');

const common = {
  context: path.join(SRC_PATH, 'app'),
  entry: {
    main: './main.js',
  },
  output: {
    path: DIST_PATH,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jp[e]g)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_PATH, 'index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: DIST_PATH,
    },
    open: {
      app: {
        name: 'chrome',
      },
    },
  },
};

module.exports = { SRC_PATH, DIST_PATH, common };