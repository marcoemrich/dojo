(function (sandbox) {
  'use strict';

  Function.prototype.drop = function (limit) {
    var fn = this;

    return function () {
      var args = Array.prototype.slice.call(arguments, 0, limit);
      return fn.apply(this, args);
    };
  };

}(this));