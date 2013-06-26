(function (sandbox) {
  'use strict';

  describe('Function', function () {

    describe('#flip()', function () {

      it('is a function', function () {
        expect(Function.prototype.flip instanceof Function).toBeTruthy();
      });

      it('returns a function', function () {
        var fn = function () {};
        expect(fn.flip() instanceof Function).toBeTruthy();
      });

      describe('returned function', function () {

        it('invokes the original function', function () {
          var fn = jasmine.createSpy('fn');
          fn.flip()();
          expect(fn).toHaveBeenCalled();
        });

        it('invokes the original function with flipped arguments', function () {
          var fn = jasmine.createSpy('fn');
          fn.flip()(1, 2);
          expect(fn).toHaveBeenCalledWith(2, 1);
        });

        it('invokes the original function with correctly bound this', function() {
          var obj = {
            a: 0,
            fn: function (a) {
              this.a = a;
            }
          };

          obj.fn = obj.fn.flip();
          obj.fn(3);
          expect(obj.a).toEqual(3);
        });

      });

    });

  });

}(this));