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
  var commentNumber = 1;
  var databaseRef = firebase.database().ref("/comment" + commentNumber);

  $(document).ready(function(){
  	

  });