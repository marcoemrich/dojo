(function (sandbox) {
  'use strict';

  var CalcString = sandbox.CalcString;

  describe('CalcString', function () {

    it('extends String', function () {
      var calcString = new CalcString();

      expect(calcString instanceof String).toBeTruthy();
    });

    describe('#calc()', function () {

      it('returns 0 if the string is empty ("".calc => 0)', function () {
        var calcString = new CalcString('');
        expect(calcString.calc()).toEqual(0);
      });

      it('returns a number from the string ("3".calc()) => 3)', function () {
        var calcString = new CalcString('3');
        expect(calcString.calc()).toEqual(3);
      });

      it('returns the sum of three comma separated numbers ("1,2,3".calc() => 6)', function () {
        var calcString = new CalcString('1,2,3');
        expect(calcString.calc()).toEqual(6);
      });

      it('works with linebreaks ("1\n2,3".calc() => 6)', function () {
        var calcString = new CalcString('1\n2,3');
        expect(calcString.calc()).toEqual(6);
      });

      it('works with other - non comma - delimiters, introduced by a start line with // ("//;\n1;2".calc() => 3)', function () {
        var calcString = new CalcString('//;\n1;2');
        expect(calcString.calc()).toEqual(3);
      });

      it('ignores numbers bigger than 1000', function () {
        var calcString = new CalcString('1001');
        expect(calcString.calc()).toEqual(0);
      });

    });

  });

}(this));