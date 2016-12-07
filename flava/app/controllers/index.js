/**
 * Created by Wayne on 16/2/26.
 */

var path = require('path');

exports.index = function (req, res, next) {
  //return res.status(200).end('index success');

  return res.sendfile(path.join(__dirname, '../../../study/view/layout.client.view.html'));
};