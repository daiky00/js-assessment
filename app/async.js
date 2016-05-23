exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var dfd = jQuery.Deferred();
    setTimeout(function() {
      dfd.resolve(value)
    }, 10);
    return dfd.promise();
  },

  manipulateRemoteData: function(url) {
    var dfd = jQuery.Deferred();
    jQuery.ajax(url).then( function (respond) {
      var people = jQuery.map(respond.people, function(person) {
        return person.name;
      });
      dfd.resolve(people.sort());
    });
    return dfd.promise();
  }
};
