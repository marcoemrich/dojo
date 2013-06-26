(function (sandbox) {
  'use strict';

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
      .map(parseInt.flip().drop(2).curry(10))
      .filter(function (c) {
        return (c < 1000);
      })
      .reduce(function (mem, c) {
        return c + mem;
      }, 0);

  };

}(this));