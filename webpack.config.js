const path = require('path');
const webpack = require('webpack');
var loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPugin = require('copy-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  output: {
    publicPath: '/',
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      '/node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.json'],
  },
  module: {
    loaders
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new CopyWebpackPugin([{
        from: __dirname + '/public'
    }])
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    port: PORT,
    host: HOST
  }
}
