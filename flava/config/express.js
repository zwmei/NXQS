/**
 * Created by Wayne on 16/2/26.
 */
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var path =require('path');

var config = require('./config');

module.exports = function() {
  var app = new express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));
//app.use(multer());

  app.use(function (req, res, next) {
    req.connection = req.connection || {};
    var ip = req.headers.host || req.connection.remoteAddress;
    console.log('url access:', new Date().toTimeString(), ip, req.path, req.method, 'params: ', req.body, req.query);
    next();
  });

  config.getFileList('./app/routes/**/*.js').forEach(function (routePath) {
    require(path.resolve(routePath))(app);
  });


  app.use('/', express.static(path.resolve('../')));

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

  return app;
};