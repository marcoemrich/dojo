(function (sandbox) {
  'use strict';


  function StringCalculator(s) {
    this._s = s;
    this.delimiter = ',';
    this.customDelimiterDetector = /\/\/(.)/;
  }


  StringCalculator.prototype = new String();


  StringCalculator.prototype.toString = function () {
    return this._s;
  };


  StringCalculator.prototype.calc = function () {
    var strings, numbers;

    strings = this.normalizeDelimiters().split(this.delimiter);
    numbers = this.parseNumbers(strings);
    numbers = this.onlyNumbersGreaterThan1000(numbers);

    return this.sumNumbers(numbers);
  };


  StringCalculator.prototype.normalizeDelimiters = function () {
    var replaced;

    replaced = this.replace(this.customDelimiterDetector, this.delimiter);
    replaced = replaced.replace('\n', this.delimiter);

    replaced = replaced.replace(this.findCustomDelimiter(), this.delimiter);

    return replaced;
  };


  StringCalculator.prototype.findCustomDelimiter = function () {
    var match = this.match(this.customDelimiterDetector);
    return (match && match[1]);
  };


  StringCalculator.prototype.parseNumbers = function (numberStrings) {
    var i, numbers = [];
    for (i = 0; i < numberStrings.length; i++) {
      numbers.push(parseInt(numberStrings[i], 10));
    }
    return numbers;
  };


  StringCalculator.prototype.onlyNumbersGreaterThan1000 = function (numbers) {
    var i, filtered = [];

    for(i = 0; i < numbers.length; i++) {
      if (numbers[i] < 1000 && numbers[i] != NaN) {
        filtered.push(numbers[i]);
      }
    }

    return filtered;
  };


  StringCalculator.prototype.sumNumbers = function (numbers) {
    var i, sum = 0;
    for (i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  };


  sandbox.StringCalculator = StringCalculator;

}(this));