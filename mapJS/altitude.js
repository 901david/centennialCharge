function initMap() {

   var pikesPeak = {
     info: '<strong>highest altitude</strong><br>\
          High point of El Paso County<br> Colorado<br>\
          <a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
    lat: 38.84,
    long: -105.04
   };
 
   var vail = {
     info: '<strong>highest altitude</strong><br>\
           1025 W Belmont Ave<br> Chicago, IL 60657<br>\
           <a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
     lat: 41.939670,
     long: -87.655167
   };
 
   var flatirons = {
     info: '<strong>highest altitude</strong><br>\r\
           6600 N Sheridan Rd<br> Chicago, IL 60626<br>\
          <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
     lat: 42.002707,
     long: -87.661236
   };
 
   var locations = [
       [pikesPeak.info, pikesPeak.lat, pikesPeak.long, 0],
       [vail.info, vail.lat, vail.long, 1],
       [flatirons.info, flatirons.lat, flatirons.long, 2],
     ];
 
   var map = new google.maps.Map(document.getElementById("map"), {
     zoom: 13,
     center: new google.maps.LatLng(39.742043, -104.991531),
     mapTypeId: google.maps.MapTypeId.ROADMAP
   });
 
   var infowindow = new google.maps.InfoWindow({});
 
   var marker, i;
 
   for (i = 0; i < locations.length; i++) {
     marker = new google.maps.Marker({
       position: new google.maps.LatLng(locations[i][1], locations[i][2]),
       map: map
     });
 
     google.maps.event.addListener(marker, 'click', (function (marker, i) {
       return function () {
         infowindow.setContent(locations[i][0]);
         infowindow.open(map, marker);
       }
     })(marker, i));
   }
 }