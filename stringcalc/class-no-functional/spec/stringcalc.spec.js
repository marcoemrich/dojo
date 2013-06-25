(function (sandbox) {
  'use strict';

  function stringFactory(s) {
    return new StringCalculator(s);
  }

  var StringCalculator = sandbox.StringCalculator;

  describe('StringCalculator', function () {

    it('extends String', function () {
      expect(stringFactory('') instanceof String).toBeTruthy();
    });

    describe('#calc()', function () {

      it('returns 0 if the string is empty ("".calc => 0)', function () {
        expect(stringFactory('').calc()).toEqual(0);
      });

      it('returns a number from the string ("3".calc()) => 3)', function () {
        expect(stringFactory('3').calc()).toEqual(3);
      });

      it('returns the sum of three comma separated numbers ("1,2,3".calc() => 6)', function () {
        expect(stringFactory('1,2,3').calc()).toEqual(6);
      });

      it('works with linebreaks ("1\n2,3".calc() => 6)', function () {
        expect(stringFactory('1\n2,3').calc()).toEqual(6);
      });

      it('works with other - non comma - delimiters, introduced by a start line with // ("//;\n1;2".calc() => 3)', function () {
        expect(stringFactory('//;\n1;2').calc()).toEqual(3);
      });

      it('ignores numbers bigger than 1000', function () {
        expect(stringFactory('1000').calc()).toEqual(0);
      });

    });

  });

}(this));