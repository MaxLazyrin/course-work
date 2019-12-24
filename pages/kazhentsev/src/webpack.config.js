const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/kazhentsev.js",
    output: {
        path: path.join(__dirname, "/.dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader',],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/kazhentsev.html"
        })
    ]
};