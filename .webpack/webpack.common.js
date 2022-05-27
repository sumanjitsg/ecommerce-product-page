const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve('src');
const DIST_PATH = path.resolve('dist');

const common = {
  context: path.join(SRC_PATH, 'app'),
  entry: {
    app: './app.js',
  },
  output: {
    path: DIST_PATH,
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_PATH, 'templates', 'index.hbs'),
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