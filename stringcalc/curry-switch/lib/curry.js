(function (sandbox) {
  'use strict';

  Function.prototype.curry = function () {
    var args, fn;

    args = Array.prototype.slice.call(arguments, 0);
    fn = this;

    if (!args.length) { return this; }

    return function () {
      var newArgs = Array.prototype.slice.call(arguments, 0);
      return fn.apply(this, args.concat(newArgs));
    };
  };

}(this));