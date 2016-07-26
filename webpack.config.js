var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'app'
});

module.exports = {
  entry: './src/index',
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}},
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
