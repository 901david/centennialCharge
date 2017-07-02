
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
var databaseRefContact = firebase.database().ref("/contactUs");

$(document).ready(function(){
	$("#giveUsData").click(function () {
		var nameVal = $("#name").val().trim();
		var emailVal = $("#email").val().trim();
		var messageVal = $("#message").val().trim();
		if ((nameVal === "") || (emailVal === "") || (messageVal === "")) {
			// insert modal here
			alert("you did not fill out all the fields");
		}
		else {
		$("#name").val("");
		$("#email").val("");
		$("#message").val("");
		
			databaseRefContact.push({
			name: nameVal,
			email: emailVal,
			message: messageVal
		});
		alert("We received your message");
		}
		
		
		
		
	});
	});
