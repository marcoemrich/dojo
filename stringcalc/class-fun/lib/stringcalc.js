(function (sandbox) {
  'use strict';

  function CalcString(s) {
    this._s = s;
    String.apply(this, arguments);
  }

  CalcString.prototype = new String();

  CalcString.prototype.toString = function () {
    return this._s;
  };

  var add  = function (a, b) { return a + b; },
      and  = function (a, b) { return a && b; },
      gt   = function (a, b) { return a > b; },
      is   = function (a, b) { return a === b; },
      isnt = function (a, b) { return a !== b;};

  Function.prototype.flip = function () {
    var fn = this;
    return function (a, b) {
      return fn(b, a);
    }
  };

  Function.prototype.curry = function () {
    if (arguments.length < 1) {
      return this; //nothing to curry with - return function
    }
    var fn = this;
    var args = [].slice.apply(arguments);
    return function() {
      return fn.apply(this, args.concat([].slice.apply(arguments)));
    }
  };

  Function.prototype.distribute = function (f1, f2) {
    var fn = this;
    return function (a) {
      return fn(f1(a), f2(a));
    };
  };

  CalcString.prototype.calc = function () {
    return this
      .replace(/\/\/(.)/, '')
      .replace(and(is(this.indexOf('//'), 0), this.charAt(2)), ',')
      .split(/(\n|,)/)
      .map(parseInt.flip().curry(10))
      .filter(and.distribute(isnt.curry(NaN), gt.curry(1000)))
      .reduce(add, 0);
  };

  sandbox.CalcString = CalcString;

}(this));
