/**
 * Created by Wayne on 16/2/26.
 */

var indexController = require('../controllers/index');

module.exports = function (app) {
  app.route('/').get(indexController.index);
};