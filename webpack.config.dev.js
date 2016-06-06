const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: require('./config/vendor')
  },
  output: {
    filename: '[name].bundle.js',
    path: './dist'
  },
  module: require('./config/loaders')
}
