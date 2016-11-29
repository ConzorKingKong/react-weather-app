const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: 'bundle.js'
  },
  plugins: [
  new HtmlWebpackPlugin({
    inject: true,
    title: "React Open Weather",
    template: "index.html"
  })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style!css'
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
