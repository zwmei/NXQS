/**
 * Created by Wayne on 16/3/1.
 */

'use strict';
var mongoose = require('mongoose');

var appDb = mongoose.createConnection(process.env.appDb_link, {server: {pollSize: 20}}, function (err) {
  if (err) {
    console.log('create app db connection failed: ' + err.toString());
  }
});

exports.appDb = appDb;