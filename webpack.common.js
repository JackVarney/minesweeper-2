const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",

  resolve: { extensions: [".ts", ".tsx", ".js"] },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.postcss$/,
        use: [
          "style-loader",
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],

  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  }
};
