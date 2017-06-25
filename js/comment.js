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
  var commentNumber = 0;
  var databaseRef = firebase.database().ref("/comment");

  $(document).ready(function(){
  	$("#commentSubmission").click(function () {
      var userName = $("#nameInput").val();
      var userComment = $("#commentInput").val();
      console.log(userComment + userName);
      databaseRef.push({
        name: userName,
        comment: userComment
      });
    });
    databaseRef.on("child_added", function (snapshot) {
      commentObj = snapshot.val();
      $("#commentSection").append("<p>" + commentObj.name + ":  " + commentObj.comment + "</p>");
    }, function (error) {

    });
  });