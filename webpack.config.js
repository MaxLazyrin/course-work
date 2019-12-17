const path = require("path");
const groupList = require("./src/group");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const chuncksObject = new Object();

chuncksObject['default'] = './src/index.js';

groupList.forEach((student) => {
   chuncksObject[student.folder] = `./src/pages/${student.folder}/index.js`;
});

console.log(chuncksObject);

module.exports = {
    entry: chuncksObject,
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name]/index_bundle.js"
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            chunks: ['default']
        }),
        ...groupList.map((student) => new HtmlWebpackPlugin({
            template: `./src/pages/${student.folder}/index.html`,
            filename: `./pages/${student.folder}/index.html`,
            chunks: student.folder
        }))
    ]
};
