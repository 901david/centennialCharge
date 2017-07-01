
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
	$("#giveUsData").click(function (event) {
		var nameVal = $("#name").val();
		var emailVal = $("#email").val();
		var messageVal = $("#message").val();
		console.log(nameVal);
		console.log(emailVal);
		console.log(messageVal);
		$("#name").val("");
		$("#email").val("");
		$("#message").val("");
		
			databaseRefContact.push({
			name: nameVal,
			email: emailVal,
			message: messageVal
		});
		alert("We received your message");
		
		
		
	});
	});
