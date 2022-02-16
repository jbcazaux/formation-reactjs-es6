const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = (env, argv = {}) => ({
  entry: {
    bundle: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]-[fullhash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './TPs/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
    }),
    new CleanWebpackPlugin({ verbose: true }),
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      public: path.resolve(__dirname, 'public'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: argv.mode === 'development' ? 'source-map' : false,
  devServer: {
    static: path.resolve(__dirname, 'public'),
    open: true,
    historyApiFallback: true,
  },
})
