const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');

//modes - [Auth, App]
//Currently mode -> Auth

module.exports = [
  {
    target: 'electron-main',
    entry: './src/auth/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'distLocal'), //auth
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          include: path.resolve(__dirname, './src/auth'),
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.js$/, // Соответствует файлам с расширением .js DANGER PART
          exclude: /node_modules/, // Исключает папку node_modules
          use: {
            loader: 'babel-loader', // Использует Babel для транспиляции JavaScript
            options: {
              presets: ['@babel/preset-env'] // Использует пресеты для поддержки современного JavaScript
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
        "fs": false, // Для renderer процесса fs не требуется
        "child_process": false, // Для renderer процесса child_process не требуется
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "vm": require.resolve("vm-browserify"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify")
      }
    }
  }
];