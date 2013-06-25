(function (sandbox) {
  'use strict';

  function CalcString(s) {
    this._s = s;
    this.customDelimiterDetector = /\/\/(.)/;
    String.apply(this, arguments);
  }

  CalcString.prototype = new String();

  CalcString.prototype.toString = function () {
    return this._s;
  };

  CalcString.prototype.calc = function () {
    return this
      .replace(this.customDelimiterDetector, '')
      .replace(this.detectCustomDelimiter(), ',')
      .split(/(\n|,)/)
      .map(CalcString.mapConvertToNumber)
      .filter(CalcString.filterNumbersSmaller1000)
      .reduce(CalcString.reduceAdd, 0);
  };

  CalcString.prototype.detectCustomDelimiter = function () {
    return (this.indexOf('//') === 0 && this._s.charAt(2));
  };

  CalcString.reduceAdd = function (mem, c) {
    return mem + c;
  };

  CalcString.filterNumbersSmaller1000 = function (c) {
    return (c !== NaN && c < 1000);
  };

  CalcString.mapConvertToNumber = function (c) {
    return parseInt(c, 10);
  };

  sandbox.CalcString = CalcString;

}(this));