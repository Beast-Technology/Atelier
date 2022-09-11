const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

const distPath = path.resolve(path.join(__dirname, '/client'), 'dist');
dotenv.config();

module.exports = {
  mode: 'development',
  entry: [
    './client/src/index.jsx',
  ],
  output: {
    path: distPath,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
};
