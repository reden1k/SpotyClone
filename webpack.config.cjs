const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//modes - [Auth, App]
//Currently mode -> Auth

module.exports = {
  target: 'electron-main',
  entry: './src/auth/index.js',
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'distLocal'), 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src/auth'),
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/auth/index.html',
      filename: 'index.html' 
    })
  ],
  resolve: {
    fallback: {
      "util": require.resolve("util/"),
      "path": require.resolve("path-browserify"),
      "url": require.resolve("url/"),
      "string_decoder": require.resolve("string_decoder/"),
      "fs": require.resolve("fs"),
      "child_process": require.resolve("child_process"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": false,
      "vm": require.resolve("vm-browserify"),
      "http": require.resolve("stream-http"),
    }
  }
};