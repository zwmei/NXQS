/**
 * Created by Wayne on 16/2/22.
 */

var lodash = require('lodash');
var glob = require('glob');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

module.exports = lodash.extend(require('./env/all'), require('./env/'+process.env.NODE_ENV) || {});

module.exports.getFileList = function (pattern) {
  var fileArray = [];

  if (!pattern) {
    return fileArray;
  }

  glob(pattern, {nodir: true, sync: true}, function (err, files) {
    if (files) {
      fileArray = fileArray.concat(files);
    }
  });

  return fileArray;
};