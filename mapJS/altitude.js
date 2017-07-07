function initMap() {

   var pikesPeak = {
     info: "pikesPeak - Elevation: 14,114",
    lat: 38.84,
    long: -105.04
   };
 
   var vail = {
     info: "Vail - Elevation: 8,022′",
     lat: 39.640264,
     long: -106.374196
   };
 
   var flatirons = {
     info: "flatirons - Elevation: 5,710' - 7,132'",
     lat: 40.3666509,
     long: -105.2263749
   };
 
   var locations = [
       [pikesPeak.info, pikesPeak.lat, pikesPeak.long, 0],
       [vail.info, vail.lat, vail.long, 1],
       [flatirons.info, flatirons.lat, flatirons.long, 2],
     ];
 
   var map = new google.maps.Map(document.getElementById("map"), {
     zoom: 6,
     center: new google.maps.LatLng(39.742043, -104.991531),
     mapTypeId: google.maps.MapTypeId.ROADMAP
   });
 
   var marker, i;
 
   for (i = 0; i < locations.length; i++) {
    console.log(locations[i]);
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    (function(marker, i) {
        // add click event
        google.maps.event.addListener(marker, 'click', function() {
            infowindow = new google.maps.InfoWindow({
                content: locations[i][0]
            });
            infowindow.open(map, marker);
        });
    })(marker, i);
   }
 }
