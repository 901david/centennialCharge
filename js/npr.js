$(document).ready(function() {
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "6aaccd1f27414fe993e6fad238be539b",
  'q': "denver, colorado",
  'page': 2
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(response) {
  var articleURL = response.response.docs[0].web_url;
  var articleSnippet = response.response.docs[0].snippet;
  var imageUrl = response.response.docs[0].multimedia[0].url;
  var articleHeadline = response.response.docs[0].headline.main;
  console.log(articleURL);
  console.log(articleSnippet);
  console.log(imageUrl);
  console.log(articleHeadline);
  $("#testArea").append("<div class='col-lg-2'><p>" + articleHeadline + "</p><a href='" + articleURL + "'><img class='img-responsive' alt='Article Image' src='https://static01.nyt.com/" + imageUrl + "'></a><p>" + articleSnippet + "</p>")
}).fail(function(err) {
  throw err;
});
});