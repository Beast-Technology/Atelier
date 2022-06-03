const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const webpack = require('webpack');

const distPath = path.resolve(path.join(__dirname, '/client'), 'dist');

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
    new webpack.DefinePlugin(
      {
        'process.env':
      { NODE_ENV: JSON.stringify('production') },
      },
    ),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]', algorithm: 'gzip', test: /\.js$|\.css$|\.html$/, threshold: 10240, minRatio: 0.8,
    })],
};
