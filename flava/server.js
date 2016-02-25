/**
 * Created by Wayne on 16/2/22.
 */

var express = require('express');
var config = require('./config/config');

var app = new express();

app.use('/index', function (req, res, next) {
  JSON.parse("{}ksdkd");

  return res.send('access ok');
});

app.use(function (err, req, res, next) {
  res.status(500).json({
    err: {
      type: 'api_error',
      message:'An internal error has occurred.'
    }
  });
});

app.use(function (req, res, next) {
  res.status(404).json({
    err: {
      type: 'invalid_request_error'
    }
  });
});


app.listen(config.port);

console.log('process.env.NODE_ENV',process.env.NODE_ENV);