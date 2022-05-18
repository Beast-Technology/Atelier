const webpack = require('webpack');
const path = require('path');

const distPath = path.resolve(path.join(__dirname, '/client'), 'dist');

const config = {
  entry: [
    './client/src/index.jsx',
  ],
  output: {
    path: distPath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: distPath,
    },
  },
};

module.exports = config;
