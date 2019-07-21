const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsConfigPathsPlugin = require("awesome-typescript-loader")
    .TsConfigPathsPlugin;

process.env.NODE_ENV = "development";

module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        plugins: [new TsConfigPathsPlugin()]
    },
    mode: "development",
    target: "web",
    devtool: "source-map",
    entry: "./src/index.tsx",
    devServer: {
        stats: "minimal",
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        https: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: ["awesome-typescript-loader"]
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"] // the order is from last to end
                // css-loader takes all css files and converts it in string
                // and then style-loader would take the output string generated
                // by the above css-loader and put it inside the <style> tags in the index.html file
            },
            {
                test: /\.(gif|svg|jpg|png|ico)$/,
                loader: "file-loader"
            }
        ]
    }
};
