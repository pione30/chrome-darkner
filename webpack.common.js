const path = require('path');

module.exports = {
  entry: {
    popup: './src/popup.js',
    checked: './src/checked.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js')
  }
};
