var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		publicPath: '/',
		path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js',
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
	devServer: {
    historyApiFallback: true,
  },
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		// new ExtractTextPlugin('[contenthash].css', {
		// 	allChunks: true
		// }),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'Webpack App'
		}),
		new webpack.optimize.DedupePlugin()
	]
};
