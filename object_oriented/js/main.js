/**
 * Created by Wayne on 16/2/19.
 */

define(function(require, exports, module) {

  // 通过 require 引入依赖
  //var $ = require('../../web_library/jquery/dist/jquery.min.js');

  var $ = jQuery;

  //var calculate = require('calculate');
  //var data = require('data');

  // 通过 exports 对外提供接口
  exports.init = function () {
    console.log('access main');
    var hello = $('\
    <div>access main</div>\
    ');
    hello.appendTo($('body'));
    //
    //var newData = new data();
    //
    //console.log('age' , newData.getAge());
    //console.log('sex' , newData.getSex());

    var data = require('data');
    console.log(data.name);
  };

  exports.exit = function () {
    var calculate = require('calculate');
    var calc = new calculate(12, false);
    console.log('age', calc.getAge());
    console.log('sex', calc.getSex());

  }

});