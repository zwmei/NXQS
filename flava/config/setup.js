/**
 * Created by Wayne on 16/3/1.
 */

'use strict';

var config = require('./config');

module.exports = function () {
  if (!process.env) {
    process.env = {};
  }
  process.env.appDb_link = config.appDb_link;

  var mongo = require('../../libraries/mongoose');
  //require('../models/all')(mongo.appDb);
}