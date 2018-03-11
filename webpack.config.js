const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './TPs/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
        }),
        new CleanWebpackPlugin(['build'], {verbose: true})
    ],
    resolve: {extensions: ['.js']},
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'source-map-loader'
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/',
        open: true,
        historyApiFallback: true
    }
};
