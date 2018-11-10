const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const dotenv = require("dotenv");
const devMode = process.env.NODE_ENV !== 'production'

const CSSModuleLoader = {
    loader: "css-loader",
    options: {
        modules: true,
        sourceMap: true,
        localIdentName: "[local]__[hash:base64:5]",
        minimize: true
    }
};

const CSSLoader = {
    loader: "css-loader",
    options: {
        modules: false,
        sourceMap: true,
        minimize: true
    }
};

const postCSSLoader = {
    loader: "postcss-loader",
    options: {
        ident: "postcss",
        sourceMap: true,
        plugins: () => [
            autoprefixer({
                browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"]  
            })
        ],
    }
};

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
                exclude: /\.module\.scss$/,
                use: [
                    // fallback to style-loader in development
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    CSSModuleLoader,
                    postCSSLoader,
                    "sass-loader",
                ]
            }, 
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
