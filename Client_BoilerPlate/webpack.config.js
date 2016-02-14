var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'src/mainApp.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // Extracts css files
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },

      // Extracts jsx files
      {
        test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
        loader: 'babel', // The module to load. "babel" is short for "babel-loader"
        query:
        {
          presets:['react', 'es2015']
        }
      },

      // Loads html files
      {
        test: /\.jpe?g$|\.gif$|\.png$/,
        loader: "file"
      }
    ]
  }
};
