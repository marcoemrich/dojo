(function (sandbox) {
  'use strict';

  describe('String Calculator', function () {

    it('can be invoked on any string', function () {
      expect(''.calc).toBeDefined();
    });

    it('returns 0 if the string is emtpy', function () {
      expect(''.calc()).toEqual(0);
    });

    it('returns a number from the string ("3".calc()) => 3)', function () {
      expect('3'.calc()).toEqual(3);
    });

    it('returns the sum of three comma separated numbers ("1,2,3".calc() => 6)', function () {
      expect('1,2,3'.calc()).toEqual(6);
    });

    it('works with linebreaks ("1\n2,3".calc() => 6)', function () {
      expect('1\n2,3'.calc()).toEqual(6);
    });

    it('works with other - non comma - delimiters, introduced by a start line with // ("//;\n1;2".calc() => 3)', function () {
      expect("//;\n1;2".calc()).toEqual(3);
    });

    it('ignores numbers bigger than 1000', function () {
      expect('10000'.calc()).toEqual(0);
      expect('10000,3'.calc()).toEqual(3);
    });

  });

}(this));