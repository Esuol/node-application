/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const resolve = {
  alias: {
    action: path.join(__dirname, "./web/action"),
  },
  extensions: [".js", ".jsx"],
};

const serverConfig = {
  target: "node",
  entry: {
    page1: "./web/render/serverRouter.js",
  },
  resolve,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../app/build"),
    libraryTarget: "commonjs",
  },
  mode: process.env.NODE_ENV,
  externals: [nodeExternals()],
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
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)?$/,
        loader: 'url-loader',
        options: {
          limit: 8000,
          outputPath: '../public/',
          publicPath: '/'
        }
      }
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};

module.exports = serverConfig;
