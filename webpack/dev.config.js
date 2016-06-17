'use strict';

var config = require('./common.config.js');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var version = require('../package.json').version;

config.devServer = {
  contentBase: 'static/',
  historyApiFallback: true
};

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    APP_VERSION: JSON.stringify(version)
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './static/templates/index.html',
    inject: true,
    favicon: './static/images/favicon.ico'
  })
];

module.exports = config;
