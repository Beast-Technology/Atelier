const webpack = require('webpack');
const path = require('path');

const distPath = path.resolve(path.join(__dirname, '/client'), 'dist');

const config = {
  mode: "development",
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
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: distPath,
    },
  },
};

module.exports = config;
