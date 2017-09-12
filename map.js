
  var map;
  //Defining the infoWindow displaying the results on the map
  var infowindow;
  // Defining the keywords for filtering the search
  var searchwords = "agence+web";

  // Initiate Map
  function initMap() {
      var paris = {lat: 48.8704907, lng: 2.3309359};
      map = new google.maps.Map(document.getElementById('map'), {
          center: paris,
          zoom: 13,
          styles: [{
              stylers: [{ visibility: 'simplified' }]
          }, {
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
          }]
      });

      infowindow = new google.maps.InfoWindow();

    // Call the Places API Web Service
    var service = new google.maps.places.PlacesService(map);

    // Initiate Radar Search
    service.radarSearch({
        location: paris,
        radius: 7000,
        keyword: searchwords
    }, callback);

}
// console.log(google.maps.places.PlacesServiceStatus);

// Create array to store results of the RadarSearch (max 200)
var agencies = [];

function callback(results, status) {
// console.log(google.maps.places.PlacesServiceStatus);
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {

            //Fetch the ID of each Place returned by the Radar Search
          	var request = {
				          placeId: results[i]['place_id']
			         };

            // Call the Places API Web Service
            service = new google.maps.places.PlacesService(map);

            // Initiate Place Details request
            service.getDetails(request, callback);

            function callback(place, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {

                    createMarker(place);
                    console.log(place.name +  results.length + agencies.length);
                    agencies.push([place.name, place.website, place.rating]);

                }
            }
        }
    }
}
