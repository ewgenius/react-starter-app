module.exports = {
  loaders: [{
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel',
    query: {
      presets: ["es2015", "react", "stage-0"]
    }
  }, {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  }, {
    test: /\.scss/,
    loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
  }, {
    test: /\.(png|jpg|gif|woff|woff2|eot|svg|ttf)(\?v=.+)?$/,
    loader: 'file-loader?limit=8192'
  }]
}
