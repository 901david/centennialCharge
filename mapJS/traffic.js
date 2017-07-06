

 function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 13,
          center: {lat: 39.73915, lng: -104.991531}
        });

        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
      }