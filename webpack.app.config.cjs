const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    target: 'electron-main',
    entry: './src/frontend/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'distApp'),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          include: path.resolve(__dirname, './src/frontend'),
          use: ['style-loader', 'css-loader']
        },
         {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/frontend/index.html',
        filename: 'index.html' 
      })
    ],
    resolve: {
      fallback: {
        "util": require.resolve("util/"),
        "path": require.resolve("path-browserify"),
        "url": require.resolve("url/"),
        "string_decoder": require.resolve("string_decoder/"),
        "fs": require.resolve('node:fs'),
        "child_process": require.resolve('child_process'),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "vm": require.resolve("vm-browserify"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify")
      }
    }
  }
];