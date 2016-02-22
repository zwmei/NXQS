/**
 * Created by Wayne on 16/2/19.
 */
define(function (require, exports, module) {
  module.exports = function (age, sex) {
    this.age = age;
    this.sex = sex;
    this.getAge = function () {
      return this.age;
    }
    this.getSex = function () {
      return this.sex;
    }
  }
});