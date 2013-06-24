(function (sandbox) {
  'use strict';

  String.prototype.calc = function () {

    var delimiter = ',';

    var otherDelimiters = [
      this.match(/^\/\/(.)/)
    ].filter(function (cur) {
      return cur;
    }).map(function (cur) {
      return cur[1];
    });

    return this.replace(/\/\/./, '')
    .replace('\n', delimiter)
    .replace(otherDelimiters, delimiter)
    .split(delimiter)
    .filter(function (cur) {
      return cur.match(/^(\d)$/);
    })
    .map(function (cur) {
      return parseInt(cur, 10);
    })
    .reduce(function (mem, cur) {
      return mem + cur;
    }, 0);
  };

}(this));