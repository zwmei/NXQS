/**
 * Created by Wayne on 16/2/22.
 */

var lodash = require('lodash');

module.exports = lodash.extend(require('./env/all'), require('./env/'+process.env.NODE_ENV) || {});