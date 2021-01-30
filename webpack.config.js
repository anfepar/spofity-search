const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@/__mocks__": path.resolve(__dirname, "./src/__mocks__/"),
      "@/__test__": path.resolve(__dirname, "./src/__test__/"),
      "@/actions": path.resolve(__dirname, "./src/actions/"),
      "@/assets": path.resolve(__dirname, "./src/assets/"),
      "@/components": path.resolve(__dirname, "./src/components/"),
      "@/constants": path.resolve(__dirname, "./src/constants/"),
      "@/containers": path.resolve(__dirname, "./src/containers/"),
      "@/hooks": path.resolve(__dirname, "./src/hooks/"),
      "@/reducers": path.resolve(__dirname, "./src/reducers/"),
      "@/routes": path.resolve(__dirname, "./src/routes/"),
      "@/utils": path.resolve(__dirname, "./src/utils/"),
    },
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css|.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
  ],
};
