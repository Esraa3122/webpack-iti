const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { type } = require("os");

module.exports = {
    // entry: "./src/index.js",
    entry: {
        template: "./src/index.js",
        about: "./src/about.js",
    },
    output: {
        filename: "[name].js",
        clean: true,
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: "index.html",
            chunks: ["template"],
        }),
         new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: "about.html",
            chunks: ["about"],
        })
    ],
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(jpg|png)$/i,
                type: 'asset/resource'
            }
        ]
    }
}