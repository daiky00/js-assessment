exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  or: function(a, b) {
    if(a || b) {
      return true;
    }
  },

  and: function(a, b) {
    if(a && b) {
      return true;
    }
  }
};
