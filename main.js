function initMap() {
    const loc = { lat: 8.133050, lng: 4.238450 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: loc
    });
    new google.maps.Marker({ position: loc, map: map });
  }
  