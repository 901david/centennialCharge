	
var searchCriteria = ["denver, colorado", "colorado", "colorado weather", "denver metro"]
var searchForThis = searchCriteria [Math.floor(Math.random()
		* searchCriteria.length)];
var x = 0;
var y = 3;
$(document).ready(function() {
	console.log(searchForThis);
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
  'api-key': "6aaccd1f27414fe993e6fad238be539b",
  'q': searchForThis,
  'page': 2
	});
		$.ajax({
  		url: url,
 		 method: 'GET',
		}).done(function(response) {
		function displayArticles () {
			for (var i = x; i < y; i++) {
	 		var article = response.response.docs[i];
	 			if (article.multimedia.length === 0) {
	 				var articleURL = response.response.docs[i].web_url;
			  		var articleSnippet = response.response.docs[i].snippet;
			  		var imageUrl = "../nytimes.gif";
			  		var articleHeadline = response.response.docs[i].headline.main;
			  		console.log(imageUrl);
			  		$("#testArea").append("<a href='" + articleURL + "'><div class='col-md-2 col-lg-2' id='boxBetter'><p class='headLine'>" + articleHeadline + "</p><img class='img-responsive d-block img-fluid' alt='Article Image' src='" + imageUrl + "'><p class='snippet'>" + articleSnippet + "</p></div></a>");
				}
				else {
					var articleURL = response.response.docs[i].web_url;
			  		var articleSnippet = response.response.docs[i].snippet;
			  		var imageUrl = response.response.docs[i].multimedia[0].url;
			  		var articleHeadline = response.response.docs[i].headline.main;
			  		console.log(imageUrl);
			  		$("#testArea").append("<a href='" + articleURL + "'><div class='col-md-2 col-lg-2' id='boxBetter'><p class='headLine'>" + articleHeadline + "</p><img class='img-responsive d-block img-fluid' alt='Article Image' src='https://static01.nyt.com/" + imageUrl + "'><p class='snippet'>" + articleSnippet + "</p></div></a>");
				}
				}
 			};
 			displayArticles();
 			$("#rightButt").click(function () {
			$("#testArea").empty();
			x += 3;
			y += 3;
			if ((x > 8) && (y > 11)) {
				x = 0;
				y = 3;
			}
			displayArticles();
			if ((x > 8) && (y > 11)) {
				x = 0;
				y = 3;
			}

		});
		$("#leftButt").click(function () {
			$("#testArea").empty();
			if ((x === 0) && (y ===3)) {
				x = 8;
				y = 11;
				displayArticles();
			}
			else {
			x -= 3;
			y -= 3;
			displayArticles();
		}
			

		});				
});
		
  
});
  
