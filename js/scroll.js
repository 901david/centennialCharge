$(document).ready(function(){


window.addEventListener("scroll",function() { 
   if(window.scrollY > 100) {
      $("#navBarLargeTop").addClass("displayNone");
      $("#navBarLargeScroll").removeClass("displayNone");
   }
   else if(window.scrollY < 100) {
      $("#navBarLargeTop").removeClass("displayNone");
      $("#navBarLargeScroll").addClass("displayNone");
   }
   
},false);
});