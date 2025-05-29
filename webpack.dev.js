const {merge} = require("webpack-merge");
const common = require('./webpack.common.js');

module.exports=merge(common,{
    mode: "development",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    devtool: "eval-source-map",
})

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//     mode: "development",
//     devServer: {
//         watchFiles: ["./src/template.html"],
//     },
//     // entry: "./src/index.js",
//     entry: {
//         template: "./src/index.js",
//         about: "./src/about.js",
//     },
//     output: {
//         filename: "[name].js",
//         clean: true,
//         path: path.resolve(__dirname, "dist")
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/template.html',
//             filename: "index.html",
//             chunks: ["template"],
//         }),
//          new HtmlWebpackPlugin({
//             template: './src/about.html',
//             filename: "about.html",
//             chunks: ["about"],
//         })
//     ]
// }