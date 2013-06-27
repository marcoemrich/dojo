(function (sandbox) {
  'use strict';

  describe('Function', function () {

    describe('#const()', function () {

      it('is a function', function () {
        expect(Function.prototype.const instanceof Function).toBeTruthy();
      });

      it('returns a function', function () {
        var fn = function () {};
        expect(fn.const() instanceof Function).toBeTruthy();
      });

      it('drops the last parameter', function () {
        var fn = jasmine.createSpy();
        fn.const()(3, 4, 5);
        expect(fn).toHaveBeenCalledWith(3, 4);
      });

      it('invokes the original with this bound correctly', function () {
        var obj = {
          a: 10,
          fn: function (a) { this.a = a; }
        };
        obj.fn = obj.fn.const();
        obj.fn(3);
        expect(obj.a).toEqual(undefined);
      });

    });

  });

}(this));