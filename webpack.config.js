const MiniCssExractPlugin = require("mini-css-extract-plugin");
const path = require('path');

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production"){
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode:mode,
    target: target,
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use:[MiniCssExractPlugin.loader, 'css-loader', "postcss-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [ new MiniCssExractPlugin()],
    devtool: "source-map",
    devServer: {
        static:{
            directory:path.join(__dirname, 'dist'),
        },
        hot:true
    },
}