/**
 * Created by Wayne on 16/2/22.
 */

var config = require('./config/config');
var setup = require('./config/setup')();
var express = require('./config/express');


new express().listen(config.port);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

exports.index = function () {

}

exports.index1 = function () {

}

exports.index3 = function () {

}
exports.index4 = function () {
  var j = 0;
}
