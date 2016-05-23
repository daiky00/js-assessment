exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str2) {
      return str + ', ' + str2
    }

  },

  makeClosures: function(arr, fn) {

  },

  partial: function(fn, str1, str2) {
    return function partial(str3) {
     return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    var allArgs = 0;
     for (var i = 0; i < arguments.length; i++) {
       allArgs += arguments[i];
     }
    return allArgs;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args)
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
