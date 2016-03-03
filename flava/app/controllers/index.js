/**
 * Created by Wayne on 16/2/26.
 */

exports.index = function (req, res, next) {
  return res.status(200).end('index success');
};