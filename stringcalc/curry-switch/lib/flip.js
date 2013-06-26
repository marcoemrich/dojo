(function (sandbox) {
  'use strict';

  Function.prototype.flip = function () {
    var fn = this;
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return fn.apply(this, args.reverse());
    };
  };

}(this));