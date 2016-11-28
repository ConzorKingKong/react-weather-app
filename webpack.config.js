const path = require('path')
const babel = require('babel')

module.exports = {
  entry: [
    path.join(__dirname, "src", "index.js")
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
