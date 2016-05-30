var Search = function () {
  // This hash will contain your index of words. That is, the keys will be
  // tokens like "romeo", "juliet", etc.
  this.index = {};
  this.lengths = {};

  // This initializer is called when a new Search object is created. You'll need
  // to fill this in to do whatever is necessary to properly build up your
  // `index` hash, and along with any other data structures you may need.
  this.initialize = function () {
    var that = this;

    _.forEach(CORPUS, function (doc) {
      var title = doc["filename"];
      var text = doc["text"];
      var tokens = that.tokenize(text);
      that.lengths[title] = tokens.length;

      _.forEach(tokens, function(token){
        that.index[token] = that.index[token] || {};

        if(!that.index[token][title]){
          that.index[token][title] = 1;
        }else {
          that.index[token][title] += 1;
        }
      });
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
    var that = this;
    var results = [];
    var tokens = that.tokenize(query)

    _.forEach(tokens, function (token) {
        if(that.index[token]){
          var IDF = Math.log(CORPUS.length / Object.keys(that.index[token]).length);
          for(title in that.index[token]){
            var count = (that.index[token][title] / that.lengths[title]) * IDF;
            results.push({title: title, count: count})
          }
        }
    });

    var fixedResults = [];
    _.forEach(results, function (result){
      var exists = false;
      _.forEach(fixedResults, function(r){
        if(r.title === result.title){
          r.count += result.count;
          exists = true;
        }
      });
      if(!exists){
        fixedResults.push(result);
      }
    });

    fixedResults = _.sortBy(fixedResults, function(result){return -result.count})
    return fixedResults;
  };

  // Turn a string into an array of tokens.
  //
  // You don't have to modify this. You may modify it for the extensions.
  this.tokenize = function (string) {
    return _.reduce(string.split(/\s+/), function (accum, s) {
      // Split can cause some of them to be undefined. Not sure why.
      if (s) {
        var fixedS = s.split(/[',',';']+/);
        if(STOPWORDS.indexOf(fixedS[0]) === -1){
          accum.push(fixedS[0].toLowerCase());
        }
      }
      return accum;
    }, []);
  };

  this.initialize();
};