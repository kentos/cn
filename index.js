(function () {
  'use strict';

  function cn() {
    const args = arguments;
    return Array.from(args)
      .filter(x => x)
      .map(arg => {
        if (['string', 'number'].includes(typeof arg)) {
          return arg
        } else if (Array.isArray(arg)) {
          return cn.apply(null, arg)
        }
      })
      .join(' ')
  }
  module.exports = cn;
}());
