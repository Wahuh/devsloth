const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require("dotenv");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = () => {
    const env = dotenv.config().parsed;
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
      }, {});

    return {
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
    
            {
                test: /\.scss$/,
                use: [
                    // fallback to style-loader in development
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            }, 
    
            {
                test: /\.svg$/,
                use: {
                    loader: 'svg-sprite-loader'
                }
            }
          ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                    template: "./src/index.html",
                    filename: "./index.html"
                }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new webpack.DefinePlugin(envKeys)
        ]
    };
}
