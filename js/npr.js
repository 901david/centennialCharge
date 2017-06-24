	
var x = 0;
var y = 3;
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
		function displayArticles () {
			for (var i = x; i < y; i++) {
	 		var article = response.response.docs[i];
	 			if (article.multimedia.length > 0) {
	 			var articleURL = response.response.docs[i].web_url;
			  	var articleSnippet = response.response.docs[i].snippet;
			  	var imageUrl = response.response.docs[i].multimedia[0].url;
			  	var articleHeadline = response.response.docs[i].headline.main;
			  	console.log(imageUrl);
			  	$("#testArea").append("<a href='" + articleURL + "'><div class='col-md-2 col-lg-2 carousel-item active' id='boxBetter'><p class='headLine'>" + articleHeadline + "</p><img class='img-responsive d-block img-fluid' alt='Article Image' src='https://static01.nyt.com/" + imageUrl + "'><p class='snippet'>" + articleSnippet + "</p></div></a>");
				}
 			}			
};
		displayArticles()
		$("#newArticles").click(function () {
		$("#testArea").empty();
			x += 3;
			y += 3;
			displayArticles();

		});
  
}).fail(function(err) {
  throw err;
});
  
});