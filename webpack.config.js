const path = require("path");
// 절대경로를 위한 모듈을 import

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  //진입점이 될 파일
  output: {
    path: path.join(__dirname, "dist"),
    //경로
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", "json"],
    alias: {
      "@images": path.resolve(__dirname, "public/images"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@routes": path.resolve(__dirname, "src/routes"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: [
          {
            loader: "source-map-loader",
            options: {
              filterSourceMappingUrl: (url, resourcePath) => {
                if (/broker-source-map-url\.js$/i.test(url)) {
                  return false;
                }

                if (/keep-source-mapping-url\.js$/i.test(resourcePath)) {
                  return "skip";
                }

                return true;
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
