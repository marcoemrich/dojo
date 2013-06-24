(function (sandbox) {
  'use strict';

  String.prototype.calc = function () {
    var result = this.match('^//(.)+');
    var delimiter = result ? result[1] : ',';
    var content = delimiter === ',' ? this : this.substr(this.indexOf(delimiter));

    //content = content.replace(/\d/);

    content = content.replace('\n', delimiter);
    if (content === '') {
      return 0;
    }

    if (content.match(/^\d$/)) {
      return parseInt(content, 10);
    }

    //if (content.indexOf(delimiter) !== -1) {
      
      return content.split(delimiter)
                 .map(function (part) {
      
                    return parseInt(part, 10);
                  })
                 .reduce(function (mem, cur) {
                    if (cur && cur < 1001) {
                      return mem + cur;
                    } else {
                      return mem;
                    }
                  }, 0);
    //}
  };

}(this));