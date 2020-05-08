/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const nodeExternals = require("webpack-node-externals");
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
        use: 'happypack/loader?id=jsx',
        exclude: /node_modules/,
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
        exclude: /node_modules/,
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
    new CleanWebpackPlugin(),
    new HappyPack({
      id: 'jsx',
      threads: 4,
      loaders: [ 'babel-loader' ]
    }),
    new HardSourceWebpackPlugin({
      // cacheDirectory是在高速缓存写入。默认情况下，将缓存存储在node_modules下的目录中
      cacheDirectory: path.join(__dirname, './lib/.cache/hard-source/[confighash]'),
      // configHash在启动webpack实例时转换webpack配置，
      // 并用于cacheDirectory为不同的webpack配置构建不同的缓存
      configHash: function(webpackConfig) {
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
        mode: 'none',
        level: 'debug',
      },
      // Clean up large, old caches automatically.
      cachePrune: {
        maxAge: 2 * 24 * 60 * 60 * 1000,
        sizeThreshold: 50 * 1024 * 1024
      },
    }),
  ],
};

module.exports = serverConfig;
