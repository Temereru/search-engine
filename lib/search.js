var Search = function () {
  // This hash will contain your index of words. That is, the keys will be
  // tokens like "romeo", "juliet", etc.
  this.index = {};

  // This initializer is called when a new Search object is created. You'll need
  // to fill this in to do whatever is necessary to properly build up your
  // `index` hash, and along with any other data structures you may need.
  this.initialize = function () {
    var that = this;

    _.forEach(CORPUS, function (doc) {
      var title = doc["filename"];
      var text = doc["text"];
      var tokens = that.tokenize(text);

      // TODO your code here
    });
  };

  // Searches the corpus given a query.
  //
  // query - String.
  //
  // Returns an array of objects. The object should contain the key "title".
  // Example:
  //
  // [{
  //   "title": "Romeo and Juliet.txt"
  // }]
  //
  this.query = function (query) {
    var results = [];

    _.forEach(tokens, function (token) {
      // TODO your code here
    });

    return results;
  };

  // Turn a string into an array of tokens.
  //
  // You don't have to modify this. You may modify it for the extensions.
  this.tokenize = function (string) {
    return _.reduce(string.split(/\s+/), function (accum, s) {
      // Split can cause some of them to be undefined. Not sure why.
      if (s) {
        accum.push(s.toLowerCase());
      }

      return accum;
    }, []);
  };

  this.initialize();
};