const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = [
  {
    target: 'electron-main',
    entry: './src/auth/index.js',
    output: {
      filename: 'bundleAuth.js',
      path: path.resolve(__dirname, 'distLocal'), 
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          include: path.resolve(__dirname, './src/auth'),
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
        template: './src/auth/index.html',
        filename: 'index.html' 
      })
    ],
    resolve: {
      fallback: {
        process: require.resolve('process/browser'),
        "util": require.resolve("util/"),
        "path": require.resolve("path-browserify"),
        "url": require.resolve("url/"),
        "string_decoder": require.resolve("string_decoder/"),
        "fs": false,
        "child_process": false, 
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "vm": require.resolve("vm-browserify"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify")
      }
    }
  }
];