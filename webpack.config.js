var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",
  entry: "./app.js",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  module:{
    loaders: [{
      test:/\.jsx?$/,
      exclude: /(node_modules)/,
      loader:'babel'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};