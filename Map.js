var modelMap = L.map("modelMap", {
    center: [54.597, -5.93],
  }).setView([54.597, -5.93], 13),
  apiToken =
    "pk.eyJ1Ijoic2hlYW1jZGV2aXR0IiwiYSI6ImNrZjVlNm01djBtNG4ydG1kdmZlODRpamoifQ.knGNcH3Sn3wlGMpZJaleKw",
  marker;

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11",
    access_token:
      "pk.eyJ1Ijoic2hlYW1jZGV2aXR0IiwiYSI6ImNrZjVlNm01djBtNG4ydG1kdmZlODRpamoifQ.knGNcH3Sn3wlGMpZJaleKw",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(modelMap);
var control = new L.Control.Geocoder();

mapboxControl = L.Control.Geocoder.mapbox(apiToken);
control.options.geocoder = mapboxControl;
/*
var popup = L.popup();
var marker;

function onMapClick(e) {
  marker = L.marker(e.latlng)
    .addTo(modelMap)
    .bindPopup(
      "<b>Project Name!</b><br>You are at: " +
        e.latlng.lat.toFixed(2) +
        "," +
        e.latlng.lng.toFixed(2)
    )
    .openPopup();
  /* popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(modelMap);
}*/

//modelMap.on("click", onMapClick);
control.addTo(modelMap);

modelMap.on("click", function (e) {
  control.options.geocoder.reverse(
    e.latlng,
    modelMap.options.crs.scale(modelMap.getZoom()),
    function (results) {
      var r = results[0];
      if (r) {
        if (marker) {
          modelMap.removeLayer(marker);
        }
        marker = L.marker(r.center)
          .bindPopup(r.html || r.name)
          .addTo(modelMap)
          .openPopup();
      }
    }
  );
});
