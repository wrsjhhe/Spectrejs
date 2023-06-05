const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    //入口
    entry: "./src/spectre.ts", //相对路径
    //输出
    output: {
        path: path.resolve(__dirname, "./examples/build"), //绝对路径
        filename: "js/spectre.min.js",
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
                use: "ts-loader",
                exclude: "/node-modules/",
            }
        ],
    },
    //插件
    plugins: [
        new ESLintPlugin({
            context: path.resolve(__dirname, "src"),
        })
    ],
    //模式
    mode: "production",
};
