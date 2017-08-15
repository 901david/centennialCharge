
// Initialize Firebase
var config = {
	apiKey: "AIzaSyDsYb-UNzHdNFHVtXy5htkfh4Y4mWAJv4M",
	authDomain: "centennialcharge.firebaseapp.com",
	databaseURL: "https://centennialcharge.firebaseio.com",
	projectId: "centennialcharge",
	storageBucket: "centennialcharge.appspot.com",
	messagingSenderId: "284867902243"
};
firebase.initializeApp(config);


$(document).ready(function(){

	$("#giveUsData").click(function (event) {
		event.preventDefault();
		let nameVal = $("#name").val().trim();
		let emailVal = $("#email").val().trim();
		let messageVal = $("#message").val().trim();
		if ((nameVal === "") || (emailVal === "") || (messageVal === "")) {
			$("#notAllFields").removeClass("displayNone");
			$("#notAllFields").addClass("displayBlock");
			$("#closeThisNotFill").click(function () {
				$("#notAllFields").removeClass("displayBlock");
				$("#notAllFields").addClass("displayNone");
			});

		}
		else if ((emailVal.includes("@")) && (emailVal.includes("."))){
			$("#name").val("");
			$("#email").val("");
			$("#message").val("");
			let databaseRefContact = firebase.database().ref("/contactUs");
			databaseRefContact.push({
				name: nameVal,
				email: emailVal,
				message: messageVal
			});
			$("#showOverOrNot").removeClass("displayNone");
			$("#showOverOrNot").addClass("displayBlock");
			$("#closeThisThanks").click(function () {
				$("#showOverOrNot").removeClass("displayBlock");
				$("#showOverOrNot").addClass("displayNone");
			});
		}
		else {
			$("#notValid").removeClass("displayNone");
			$("#notValid").addClass("displayBlock");
			$("#closeThisNoEmail").click(function () {
				$("#notValid").removeClass("displayBlock");
				$("#notValid").addClass("displayNone");
			});
		}
	});
});
