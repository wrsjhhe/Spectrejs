const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //入口
    entry: "./src/spectre.ts", //相对路径
    //输出
    output: {
        path: path.resolve(__dirname, "dist"), //绝对路径
        filename: "js/spectre.js",
        clean: true,
        library: {
            type: 'module',
        }
    },
    experiments: {
        outputModule: true,
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
    mode: "production",
    devServer: {
        host: "localhost",
        port: "3000",
        open: true,
    },
};
