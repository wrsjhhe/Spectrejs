const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //入口
    entry: "./src/spectre.ts", //相对路径
    //输出
    output: {
        filename: "js/spectre.js",
    },
    resolve: {
        extensions: [".ts", ".js", ".json"],
    },
    //加载器
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: "/node-modules/",
            },
            {
                test: /\.wgsl$/i,
                use: 'raw-loader',
            }
        ],
    },
    //插件
    plugins: [
        new ESLintPlugin({
            context: path.resolve(__dirname, "src"),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "examples/index.html"),
        }),
    ],
    //模式
    mode: "development",
    devServer: {
        host: "localhost",
        port: "8000",
        open: true,
    },
    devtool: "cheap-module-source-map"
};
