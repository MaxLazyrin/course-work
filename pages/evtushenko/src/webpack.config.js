const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["@babel/polyfill",'./src/index.js'],
    output: {
        path: path.join(__dirname, '/.dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        host: '0.0.0.0',
        contentBase: '/app/dist',
        hot: true,
        compress: true,
        port: 80,
        disableHostCheck: true
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}