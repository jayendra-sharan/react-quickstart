const path = require('path');
const webpack = require('webpack');

//env
module.exports = {
  devtool: 'eval',

  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: true
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
