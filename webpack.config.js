const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
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
        })
    ]
};