const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => ({
  entry: {
    bundle: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
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
  resolve: { extensions: ['.js'] },
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
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    open: true,
    historyApiFallback: true,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
})
