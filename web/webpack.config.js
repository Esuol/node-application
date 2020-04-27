const dev = process.env.REACT_APP_ENV !== "production";
const path = require( "path" );
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 使用交互式可缩放树图可视化webpack输出文件的大小
// 识别特定类别的webpack错误，并清理、聚合它们，并对它们进行优先排序，以提供更好的开发人员体验
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
// 注意这个引入的坑，最新版的需要这样引入，而不是直接const CleanWebpackPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// css Tree Shaking
const PurifyCSS = require('purifycss-webpack')
const glob = require('glob-all')


const plugins = [
  new FriendlyErrorsWebpackPlugin(),
  new MiniCssExtractPlugin({
      filename: "styles.css",
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: '../public/index.html',
    inject: true
  }),
  new HappyPack({
    id: 'babel',
    loaders:['babel-loader?cacheDirectory']
  }),
  new CleanWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(), // 热模块替换HMR
  // 清除无用 css
  new PurifyCSS({
    paths: glob.sync([
      // 要做 CSS Tree Shaking 的路径文件
      path.resolve(__dirname, './src/*.html'), // 请注意，我们同样需要对 html 文件进行 tree shaking
      path.resolve(__dirname, './src/*.js')
    ])
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
  mode: dev ? 'development' : 'production',
  context: path.join( __dirname, "src" ),
  devtool: dev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
  entry: path.join(__dirname, './src/index.tsx'),
  resolve: {
    modules: [
      path.resolve( "./src" ),
      'node_modules',
    ],
    alias: {
      "@": path.join(__dirname, "src"),
      pages: path.join(__dirname, "src/pages"),
      router: path.join(__dirname, "src/router")
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
          test: /\.(j|t)sx?$/,
          include: path.resolve(__dirname, 'src'),
          exclude: path.resolve(__dirname, 'node_modules'),
          use: 'happypack/loader?id=babel'
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
     // 处理字体
     {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: path.join('font/[name].[hash:7].[ext]'),
            publicPath: 'fonts/',
            outputPath: 'fonts/'
          }
        }
      ]
     }
   ],
 },
 // 提取公共代码块
 optimization: {
  splitChunks: {
    chunks: 'all',
    name: true,
    automaticNameDelimiter: '-',  // 模块间的连接符，默认为"~"
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10  // 优先级，越小优先级越高
      },
      default: {  // 默认设置，可被重写
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true  // 如果本来已经把代码提取出来，则重用存在的而不是重新产生
      }
    }
  },
  // js Tree Shaking
  // 只要mode是production就会生效，develpoment的tree shaking是不生效的，因为webpack为了方便你的调试
  usedExports:true,
},
devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true, // 该选项的作用所有的404都连接到index.html
    overlay: {
      //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
      errors: true
    },
    inline: true,
    hot: true,
    contentBase: path.join(__dirname, "./dist"),
    host: "0.0.0.0", // 可以使用手机访问
  },
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: '[name].bundle.js',
  },
  plugins,
}
