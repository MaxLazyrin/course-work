var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
      path: path.join(__dirname, "./dist"),
      filename: "index_bundle.js"
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              },
          },
          {
              test: /\.css$/,
              use: ["style-loader", "css-loader"]
          },
          {
              test: /\.less$/,
              use: [
                  {
                      loader: 'style-loader',
                  },
                  {
                      loader: 'css-loader',
                  },
                  {
                      loader: 'less-loader',
                  },
              ],
          },
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: "./src/index.html"
      })
  ]
};

// module.exports = {
//   entry: {
//     main: './src/index.js'
//   },
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: 'index_bundle.js'
//   },
//   resolve: {
//     alias: {
//       src: path.resolve(__dirname, 'src/')
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
// 	  options: {
//               presets: ['@babel/env', '@babel/react']
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: ['file-loader']
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'public/index.html'
//     })
//   ]
// };
