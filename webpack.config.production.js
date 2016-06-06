const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/app.jsx',
    vendor: require('./config/vendor')
  },
  output: {
    filename: '[name].bundle.js',
    path: './build'
  },
  module: require('./config/loaders'),
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
