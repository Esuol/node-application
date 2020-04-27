const dev = process.env.NODE_ENV !== "production";
const path = require( "path" );
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 使用交互式可缩放树图可视化webpack输出文件的大小
// 识别特定类别的webpack错误，并清理、聚合它们，并对它们进行优先排序，以提供更好的开发人员体验
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new FriendlyErrorsWebpackPlugin(),
  new MiniCssExtractPlugin({
      filename: "styles.css",
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: '../public/index.html',
    inject: true
  })
];

if(!dev) {
  plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: "static",
    reportFilename: "webpack-report.html",
    openAnalyzer: false,
  }))
}

module.exports = {
  mode: dev ? 'development' : 'prduction',
  context: path.join( __dirname, "src" ),
  devtool: dev ? 'node' : 'source-map',
  entry: path.join(__dirname, './src/index.tsx'),
  resolve: {
    modules: [
      path.resolve( "./src" ),
      'node_modules',
    ],
    alias: {
      '@src': path.resolve(__dirname, '/src/src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
          test: /\.(j|t)sx?$/,
          include: [path.resolve('./src')],
          use: [
            {
              loader: 'babel-loader'
            },
          ],
          exclude: /node_modules/
      },
      {
          test: /\.css$/,
          use: [
              {
                  loader: MiniCssExtractPlugin.loader,
              },
              'style-loader',
              'css-loader'
          ],
      },
      // sass module
      {
        test: /\.scss$/,
        include: path.join(__dirname, '../src'),
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.join(__dirname, './src/styles')]
            }
          }
        ]
     },
     // 图片字体等资源加载
     {
       test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
       use: [
        {
          loader: 'url-loader',
          options: {
            //1024 == 1kb
            //小于10kb时打包成base64编码的图片否则单独打包成图片
            limit: 10240,
            name: path.join('img/[name].[hash:7].[ext]')
          }
        }
      ]
     },
     // url-loader
     {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: path.join('font/[name].[hash:7].[ext]')
          }
        }
      ]
     }
   ],
 },
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    overlay: {
      //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
      errors: true
    },
    inline: true,
    hot: true
  },
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: '[name].bundle.js',
  },
  plugins,
}
