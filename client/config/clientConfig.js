/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const resolve = {
  alias: {
    action: path.join(__dirname, "./web/action"),
  },
  extensions: [".js", ".jsx"],
};

const clientConfig = {
  entry: {
    page1: "./web/render/clientRouter.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../public"),
  },
  mode: process.env.NODE_ENV,
  resolve,
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("precss"), require("autoprefixer")],
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  "@primary-color": "#1DA57A",
                },
              },
              // modifyVars: theme   //antd默认主题样式
            },
          },
          // {
          //   test: /\.(png|jpeg|jpg|gif|svg)?$/,
          //   loader: "url-loader",
          //   options: {
          //     limit: 8000,
          //     publicPath: "/",
          //   },
          // },
        ],
      },
    ],
  },
  plugins: [
    // 提取样式，生成单独文件
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].chunk.css",
    }),
    new ManifestPlugin(),
    new CleanWebpackPlugin(),
  ],
};

module.exports = clientConfig;
