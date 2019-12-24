const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");
module.exports ={
  entry: './src/index.js',
  output: {
    filename: 'builder.js',
    path: path.resolve(__dirname, '/dist')
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: '/app/dist',
    hot: true,
    compress: true,
    port: 9000,
    disableHostCheck: true
},
  module: {
    rules: [
      {
        test:/\.js$/,
        loader:["babel-loader"],
        exclude: /node-modules/
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
       new HtmlWebpackPlugin({
           template: "./src/index.html"
       }),
       new HtmlWebpackExternalsPlugin({ // optional plugin: inject cdn
         externals: [
        {
            module: 'jquery',
            entry: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'
        },
        {
            module: 'knockout',
            entry: 'https://knockoutjs.com/downloads/knockout-3.4.0.js'
        }
      ],
    }),
   ]
};
