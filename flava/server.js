/**
 * Created by Wayne on 16/2/22.
 */

var config = require('./config/config');
var setup = require('./config/setup')();
var express = require('./config/express');


var app = new express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(config.port);

console.log('process.env.NODE_ENV', process.env.NODE_ENV);