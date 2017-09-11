
  var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 48.8704907,
        lng: 2.3309359
      },
      zoom: 12
    });
  }
