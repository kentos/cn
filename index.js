(function () {
  'use strict';

  function cn() {
    return Array.from(arguments)
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