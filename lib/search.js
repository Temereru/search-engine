var Search = function () {
  // This hash (this.index) will contain your index of words. That is, the keys will be
  // tokens like "romeo", "juliet", etc. Example:
  //
  // {
  //   "poison": {
  //     "Romeo and Juliet.txt": 9,
  //     "Hamlet, Prince of Denmark.txt": 6
  //   }
  // }
  //
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

      // TODO #1: Build the 'index' object here
    });
  };

  // this.query searches the corpus given a query.
  this.query = function (query) {
    var that = this;
    var tokens = this.tokenize(query);
    var results = {};


    // TODO #2: First build an object inside of the 'results' object for
    // each query that looks like this (['love', 'hate'] as an example):
    // 
    // {
    //   "Romeo and Juliet.txt": {
    //     "_totalTokenCount": 25,
    //     "love": 20,
    //     "hate": 5
    //   }
    // }

    // This method has been set-up for TODO #2
    _.forEach(tokens, function (token) {

    });

    // TODO #3: Reduce your 'results' object into an array of objects/
    // For example, the query 'love hate':
    //
    // [{
    //   "Romeo and Juliet.txt": {
    //     "_totalTokenCount": 37,
    //     "love": 34,
    //     "hate": 3
    //   },
    //   "King Lear.txt": {
    //     "_totalTokenCount": 20,
    //     "love": 5,
    //     "hate": 20
    //    }
    // }]

    // TODO #4: Sort the array and return it below

    // sortedArray is the array you build above
    return sortedArray;
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
