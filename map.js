
  var map;
  //Defining the window displaying the request 'web agency'
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
