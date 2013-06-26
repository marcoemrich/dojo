(function (sandbox) {
  'use strict';

  describe('Function', function () {

    describe('#curry()', function () {

      it('is a function', function () {
        expect(Function.prototype.curry instanceof Function).toBeTruthy();
      });

      it('returns a function', function () {
        var fn = function () {};
        expect(fn.curry() instanceof Function).toBeTruthy();
      });

      it('returns the same function if no parameter given', function () {
        var fn = function () {};
        expect(fn.curry()).toEqual(fn);
      });

      it('curries the first argument', function () {
        var fn, curry;

        fn = jasmine.createSpy('fn');
        curry = fn.curry(10);
        curry(20);

        expect(fn).toHaveBeenCalledWith(10, 20);
      });

      it('invokes the curried function with this bound correctly', function () {
        var obj = {
          a: 0,
          fn: function (a) {
            this.a = a;
          }
        };

        obj.fn = obj.fn.curry(10);
        obj.fn();
        expect(obj.a).toEqual(10);
      });

    });

  });

}(this));