

 function initMap() {
        var map = new google.maps.Map(document.getElementById("mapBox"), {
          zoom: 13,
          center: {lat: 34.04924594193164, lng: -118.24104309082031}
        });

        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
      }