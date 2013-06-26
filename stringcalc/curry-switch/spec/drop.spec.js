(function (sandbox) {
  'use strict';

  describe('Function', function () {

    describe('#drop()', function () {

      it('is a function', function () {
        expect(Function.prototype.drop instanceof Function).toBeTruthy();
      });

      it('returns a function', function () {
        var fn = function () {};
        expect(fn.drop() instanceof Function).toBeTruthy();
      });

      it('drops n parameters with #drop(n)', function () {
        var fn, dropped;

        fn = jasmine.createSpy();
        dropped = fn.drop(2);
        dropped(1, 2, 3);
        expect(fn).toHaveBeenCalledWith(1, 2);

      });

      it('invokes the original with this bound correctly', function () {
        var obj = {
          a: 0,
          fn: function (a, b) { this.a = a; }
        };
        obj.fn = obj.fn.drop(1);
        obj.fn(12);

        expect(obj.a).toEqual(12);

      });

    });

  });

}(this));