(function (sandbox) {
  'use strict';

  Function.prototype.const = function () {
    var fn = this;

    return function () {
      var args = Array.prototype.slice.call(arguments, 0, -1);
      return fn.apply(this, args);
    };
  };

}(this));