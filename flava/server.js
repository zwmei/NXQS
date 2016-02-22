/**
 * Created by Wayne on 16/2/22.
 */

var express = require('express');
var config = require('./config/config');

var app = new express();

app.use('/', function (req, res, next) {
  return res.send('access ok');
});

app.listen(config.port);

console.log('process.env.NODE_ENV',process.env.NODE_ENV);