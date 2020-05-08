/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HappyPack = require('happypack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

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
        use: 'happypack/loader?id=jsx',
        exclude: /node_modules/,
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
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
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
    new HappyPack({
      id: 'jsx',
      threads: 4,
      loaders: [ 'babel-loader' ]
    }),
    new HardSourceWebpackPlugin({
      // cacheDirectory是在高速缓存写入。默认情况下，将缓存存储在node_modules下的目录中
      // 'node_modules/.cache/hard-source/[confighash]'
      cacheDirectory: path.join(__dirname, './lib/.cache/hard-source/[confighash]'),
      // configHash在启动webpack实例时转换webpack配置，
      // 并用于cacheDirectory为不同的webpack配置构建不同的缓存
      configHash: function(webpackConfig) {
        // node-object-hash on npm can be used to build this.
        return require('node-object-hash')({sort: false}).hash(webpackConfig);
      },
      // 当加载器、插件、其他构建时脚本或其他动态依赖项发生更改时，
      // hard-source需要替换缓存以确保输出正确。
      // environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存
      environmentHash: {
        root: process.cwd(),
        directories: [],
        files: ['package-lock.json', 'yarn.lock'],
      },
      // An object. 控制来源
      info: {
        // 'none' or 'test'.
        mode: 'none',
        // 'debug', 'log', 'info', 'warn', or 'error'.
        level: 'debug',
      },
      // Clean up large, old caches automatically.
      cachePrune: {
        // Caches younger than `maxAge` are not considered for deletion. They must
        // be at least this (default: 2 days) old in milliseconds.
        maxAge: 2 * 24 * 60 * 60 * 1000,
        // All caches together must be larger than `sizeThreshold` before any
        // caches will be deleted. Together they must be at least this
        // (default: 50 MB) big in bytes.
        sizeThreshold: 50 * 1024 * 1024
      },
    }),
  ],
};

module.exports = clientConfig;
