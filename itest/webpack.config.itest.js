const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = (env, argv = {}) => ({
  entry: {
    tp01: './TPs/solutions/TP-01/index.js',
    tp02: './TPs/solutions/TP-02/index.js',
    tp03: './TPs/solutions/TP-03/index.js',
    tp04: './TPs/solutions/TP-04/index.js',
    tp05: './TPs/solutions/TP-05/index.js',
    tp06: './TPs/solutions/TP-06/index.js',
    tp07: './TPs/solutions/TP-07/index.js',
    tp08: './TPs/solutions/TP-08/index.js',
    tp09: './TPs/solutions/TP-09/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebPackPlugin({
      inject: false,
      template: './itest/index.html',
      chunks: 'tp01',
      filename: './tp01.html',
      favicon: './public/favicon.ico',
    }),
    new HtmlWebPackPlugin({
      inject: false,
      template: './itest/index.html',
      chunks: 'tp02',
      filename: './tp02.html',
      favicon: './public/favicon.ico',
    }),
    new HtmlWebPackPlugin({
      inject: false,
      template: './itest/index.html',
      chunks: 'tp03',
      filename: './tp03.html',
      favicon: './public/favicon.ico',
    }),
    new HtmlWebPackPlugin({
      inject: false,
      template: './itest/index.html',
      chunks: 'tp04',
      filename: './tp04.html',
      favicon: './public/favicon.ico',
    }),
    new HtmlWebPackPlugin({
      inject: false,
      template: './itest/index.html',
      chunks: 'tp05',
      filename: './tp05.html',
      favicon: './public/favicon.ico',
    }),
    new HtmlWebPackPlugin({
      inject: false,
      template: './itest/index.html',
      chunks: 'tp06',
      filename: './tp06.html',
      favicon: './public/favicon.ico',
    }),
    new HtmlWebPackPlugin({
      inject: false,
      template: './itest/index.html',
      chunks: 'tp07',
      filename: './tp07.html',
      favicon: './public/favicon.ico',
    }),
    new HtmlWebPackPlugin({
      inject: false,
      template: './itest/index.html',
      chunks: 'tp08',
      filename: './tp08.html',
      favicon: './public/favicon.ico',
    }),
    new HtmlWebPackPlugin({
      inject: false,
      template: './itest/index.html',
      chunks: 'tp09',
      filename: './tp09.html',
      favicon: './public/favicon.ico',
    }),
    new CleanWebpackPlugin({ verbose: true }),
    new CopyPlugin({
      patterns: [{ from: 'public'}],
    }),
  ],
  resolve: {extensions: ['.js']},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: false
});
