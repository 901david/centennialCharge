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
  var databaseRef = firebase.database().ref("/comments");
  var databaseRefUser;
  var databaseRefComm = firebase.database().ref("/comments");
  var userName;
  var userComment;
  $(document).ready(function(){
  	$("#commentSubmission").click(function () {
      userName = $("#nameInput").val();
      userComment = $("#commentInput").val();
      $("#nameInput").val("");
      $("#commentInput").val("");
      console.log(userComment + userName);

      databaseRefUser = firebase.database().ref("/comments/" + userName + "/" + userComment);
      databaseRefUser.set({
        name: userName,
        comment: userComment,
        likes: 0,
        dislikes: 0,
        score: 0
      });

    });
    databaseRefComm.on("value", function (snapshot) {
      
$("#commentSection").empty();
      var rootVal = snapshot.val();
      

      Object.keys(rootVal).forEach(function(key){
          // console.log(key);
          Object.keys(rootVal[key]).forEach(function(innerKey)
          {
            
           $("#commentSection").append("<div class='well'><p>" + rootVal[key][innerKey].name + ":                " + rootVal[key][innerKey].comment + "<br/><br/><br/><p>Likes: " + rootVal[key][innerKey].likes + " Dislikes: " + rootVal[key][innerKey].dislikes + "</p><div id='likeButt" + key.split(' ').join('') + innerKey.split(' ').join('') + "' class='btn btn-primary likeButt' data-user='" + rootVal[key][innerKey].name + "' data-comment='" + rootVal[key][innerKey].comment + "'>Like</div><div id='dislikeButt" + key.split(' ').join('') + innerKey.split(' ').join('') + "' class='btn btn-primary dislikeButt' data-user='" + rootVal[key][innerKey].name + "' data-comment='" + rootVal[key][innerKey].comment + "'>Dislike</div></p></div>");

            $("#likeButt" + key.split(' ').join('') + innerKey.split(' ').join('')).click(function () {

            console.log(this);
            var userCall = $(this).attr("data-user");
            var userComm = $(this).attr("data-comment");
            var tempLink = firebase.database().ref("/comments/" + userCall + "/" + userComm);
            console.log(tempLink);
            tempLink.once("value", function (snapshot) {
            var userServerObj = snapshot.val();
            var userLikes = userServerObj.likes;
            var userDislikes = userServerObj.dislikes;
            userLikes += 1;
            tempLink.update({likes: userLikes});
            var scoreTot = userLikes - userDislikes;
            tempLink.update({score: scoreTot});

            });
          });
            $("#dislikeButt" + key.split(' ').join('') + innerKey.split(' ').join('')).click(function () {

            console.log(this);
            var userCall = $(this).attr("data-user");
            var userComm = $(this).attr("data-comment");
            var tempLink = firebase.database().ref("/comments/" + userCall + "/" + userComm);
            console.log(tempLink);
            tempLink.once("value", function (snapshot) {
            var userServerObj = snapshot.val();
            var userLikes = userServerObj.likes;
            var userDislikes = userServerObj.dislikes;
            userDislikes += 1;
            tempLink.update({dislikes: userDislikes});
            var scoreTot = userLikes - userDislikes;
            tempLink.update({score: scoreTot});
            });
          });
          });
        });
      
      }, function (error) {

      });
    
  });