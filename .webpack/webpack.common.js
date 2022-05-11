const path = require('path');

const SRC_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../dist');

const common = {
  context: SRC_PATH,
  entry: {
    index: './js/index.js',
  },
  output: {
    path: DIST_PATH,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [ 'html-loader' ],
      },
    ]
  },
  devServer: {
    static: {
      directory: DIST_PATH,
    },
    open: {
      app: {
        name: 'chrome',
      },
    },
    hot: true,
    compress: true,
  },
};

module.exports = { common };