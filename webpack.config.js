var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('src'),
  entry: './index.js',
  output: {
    path: path.resolve('dist/'),
    filename: 'scripts/bundle.js'
  },

  devServer: {
    contentBase: 'dist',
    historyApiFallback: true
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
      },
      {
        test: /\.woff2?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      { test: /\.ttf$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
};
