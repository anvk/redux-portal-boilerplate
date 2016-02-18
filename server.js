var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack/dev.config');

var app = express();
var compiler = webpack(config);

var PORT = 8080;

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  quiet: false,
  noInfo: false,
  historyApiFallback: true,
  stats: { colors: true }
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(devMiddleware);

app.use(hotMiddleware);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'static/templates/index.html'));
});

app.listen(PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + PORT);
});
