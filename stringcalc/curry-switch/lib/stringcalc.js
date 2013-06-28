(function (sandbox) {
  'use strict';

  function add(a, b) {
    return a + b;
  }

  function smallerThan(a, b) {
    return a < b;
  }

  String.prototype.calc = function () {

    var customDelimiter = [
      this.match(/\/\/(.)/)
    ].filter(function (c) {
      return c;
    }).map(function (c) {
      return c[1];
    });

    return this
      .replace('\n', ',')
      .replace(/\/\/./, '')
      .replace(customDelimiter, ',')
      .split(',')
      .map(parseInt.flip().constFn().constFn().curry(10))
      .filter(smallerThan.flip().constFn().constFn().curry(1000))
      .reduce(add, 0);
  };

}(this));