const path = require('path');

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
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
