const path = require('path');

module.exports = {
  target: 'electron-main',
  entry: './src/frontend/index.js',
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
  },
  resolve: {
    fallback: {
      "util": require.resolve("util/"),
      "path": require.resolve("path-browserify"),
      "url": require.resolve("url/"),
      "string_decoder": require.resolve("string_decoder/"),
      "buffer": require.resolve("buffer"),
      "fs": require.resolve("fs"),
      "child_process": require.resolve("child_process"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": false,
      "vm": require.resolve("vm-browserify"),
      "http": require.resolve("stream-http"),
    }
  }
};