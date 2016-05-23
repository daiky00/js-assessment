exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {


  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    var add = 0;
    for (var i = 0; i < arr.length; i++) {
      add += arr[i];
    }
    return add;
  },

  remove: function(arr, item) {
    var empty = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        empty.push(arr[i])
      }
    }
    return empty;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0 , item);
    return arr;
  },

  count: function(arr, item) {
    var c = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] ===  item) {
        c++
      }
    }
    return c;
  },

  duplicates: function(arr) {
    var uniques = [],
        duplicates = [];
    for (var i = 0; i < arr.length; i++) {
      if (uniques.indexOf(arr[i]) === -1) {
        uniques.push(arr[i]);
        if (uniques[i] = arr[i + i]) {
          duplicates.push(uniques[i]);
        }
      }
    }
    return duplicates;

  },

  square: function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] *= arr[i]
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    
  }
};
