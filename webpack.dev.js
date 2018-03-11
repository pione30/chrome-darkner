const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  output: {
    pathinfo: true
  },
  devtool: 'cheap-eval-source-map',
  watch: true
})
