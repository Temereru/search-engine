$(document).ready(function() {
  $("#query").submit(function () {
    var query = $("input.search-input").val();

    var s = new Search();
    var results = s.query(query);

    $(".results ul").empty();

    console.log(results)

    _.forEach(results, function (r) {
      $(".results ul").append("<li>" + r["title"] + "</li>");
    });
  });
});

