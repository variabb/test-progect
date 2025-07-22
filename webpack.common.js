
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./src/index.ts",
    styles: "./src/styles/main.scss",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
    }),
  ],
  output: {
    filename: "[name].[contenthash].js", 
    path: path.resolve(__dirname, "dist"),
    clean: true, 
  },
};
