$(document).ready(function() {
	let searchCriteria = ["denver, colorado", "colorado", "colorado weather"]
	let searchForThis = searchCriteria [Math.floor(Math.random()
		* searchCriteria.length)];

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
			let x = 0;
			let y = 3;
			function displayArticles () {
				for (var i = x; i < y; i++) {
					var article = response.response.docs[i];
					if ((article.multimedia.length === 0) || (article.multimedia === undefined)) {
						var articleURL = response.response.docs[i].web_url;
						var articleSnippet = response.response.docs[i].snippet;
						var imageUrl = "img/clickhere.jpg";
						var articleHeadline = response.response.docs[i].headline.main;
						$("#testArea").append("<a target='_blank' href='" + articleURL + "'><div class='col-xs-12 col-sm-12 col-md-12 col-lg-3 fadeIn animated' id='boxBetter'><p class='headLine'>" + articleHeadline + "</p><img class='img-responsive d-block img-fluid' alt='Article Image' src='" + imageUrl + "'><p class='snippet'>" + articleSnippet + "</p></div></a>");
					}
					else {
						var articleURL = response.response.docs[i].web_url;
						var articleSnippet = response.response.docs[i].snippet;
						var imageUrl = response.response.docs[i].multimedia[0].url;
						var articleHeadline = response.response.docs[i].headline.main;
						$("#testArea").append("<a target='_blank' href='" + articleURL + "'><div class='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-offset-2 fadeIn animated' id='boxBetter'><p class='headLine'>" + articleHeadline + "</p><img class='img-responsive d-block img-fluid' alt='Article Image' src='https://static01.nyt.com/" + imageUrl + "'><p class='snippet'>" + articleSnippet + "</p></div></a>");
					}
				}
			};
			$("#leftButt").addClass("hideForNow");
			displayArticles();
			$("#rightButt").click(function () {
				$("#testArea").empty();
				$("#leftButt").removeClass("hideForNow");
				x += 3;
				y += 3;
				displayArticles();
				if ((x === 6) && (y === 9)) {
					$("#rightButt").addClass("hideForNow");
				}
			});
			$("#leftButt").click(function () {
				$("#testArea").empty();
				$("#rightButt").removeClass("hideForNow");
				x -= 3;
				y -= 3;
				displayArticles();
				if ((x === 0) && (y === 3)) {
					$("#leftButt").addClass("hideForNow");
				}
			});
		});
	});
