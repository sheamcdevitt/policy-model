var allCoords, allCoordsArray, allCoordsObject;
var greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
function map() {
  $.ajaxSetup({
    cache: false,
  });
  $.ajax({
    //create an ajax request to display.php
    type: "GET",
    url: "php/sql/getLocation.php",
    dataType: "text", //expect html to be returned
    success: function (response) {
      allCoords = response;
      allCoordsArray = ' {"coordinates": [ ' + allCoords.slice(0, -1) + "] }";
      console.log(allCoordsArray);
      allCoordsObject = JSON.parse(allCoordsArray);
      console.log(allCoordsObject);
      for (let x of allCoordsObject.coordinates) {
        var marker = L.marker([x.lat, x.lng], { icon: greenIcon }).addTo(
          modelMap
        );
        marker
          .bindPopup("<b>" + x.name + "</b><br>" + x.location + "")
          .openPopup();
      }
    },
  });
}
map();

var modelMap = L.map("modelMap", {
    center: [54.787, -6.49],
  }).setView([54.787, -6.49], 8),
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

/*L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=" +
    "pk.eyJ1Ijoic2hlYW1jZGV2aXR0IiwiYSI6ImNrZjVlNm01djBtNG4ydG1kdmZlODRpamoifQ.knGNcH3Sn3wlGMpZJaleKw",
  {
    id: "mapbox/light-v9",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);*/
var control = new L.Control.Geocoder();

mapboxControl = L.Control.Geocoder.mapbox(apiToken);
control.options.geocoder = mapboxControl;

var popup = L.popup();
var marker;

/*function onMapClick(e) {
  marker = L.marker(e.latlng)
    .addTo(modelMap)
    .bindPopup(
      "<b>Project Name!</b><br>You are at: " +
        e.latlng.lat.toFixed(2) +
        "," +
        e.latlng.lng.toFixed(2)
    )
    .openPopup();
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(modelMap);
}*/

//modelMap.on("click", onMapClick);
control.addTo(modelMap);

var geoLayerRailway = L.geoJSON(translinkNIRailwayStations); //.addTo(modelMap);
var geoLayerCycleNetwork = L.geoJSON(draftBelfastBicycleNetwork);
var geoLayerMonuments = L.geoJSON(historicMonuments);

/*modelMap.on("click", function () {
  if (modelMap.hasLayer(geoLayer)) {
    modelMap.removeLayer(geoLayer);
  } else {
    modelMap.addLayer(geoLayer);
  }
});*/

$("#toggleRailwayStations").on("click", function () {
  if (modelMap.hasLayer(geoLayerRailway)) {
    modelMap.removeLayer(geoLayerRailway);
    document.getElementById("toggleRailwayStations").style.background =
      "#17A2B8";
  } else {
    modelMap.addLayer(geoLayerRailway);
    document.getElementById("toggleRailwayStations").style.background =
      "#0f4047";
  }
});
$("#toggleCycleNetwork").on("click", function () {
  if (modelMap.hasLayer(geoLayerCycleNetwork)) {
    modelMap.removeLayer(geoLayerCycleNetwork);
    document.getElementById("toggleCycleNetwork").style.background = "#17A2B8";
  } else {
    modelMap.addLayer(geoLayerCycleNetwork);
    document.getElementById("toggleCycleNetwork").style.background = "#0f4047";
  }
}); //17A2B8

$("#toggleHistoricMonuments").on("click", function () {
  if (modelMap.hasLayer(geoLayerMonuments)) {
    modelMap.removeLayer(geoLayerMonuments);
    document.getElementById("toggleHistoricMonuments").style.background =
      "#17A2B8";
  } else {
    modelMap.addLayer(geoLayerMonuments);
    document.getElementById("toggleHistoricMonuments").style.background =
      "#0f4047";
  }
});

/*var marker = L.marker([54.787, -6.49]).addTo(modelMap);
marker.bindPopup("<b>Hello !</b><br>I am a popup.").openPopup();*/
/*
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
*/

/*
function getColor(d) {
  return d > 100000000
    ? "#800026"
    : d > 50000000
    ? "#BD0026"
    : d > 20000000
    ? "#E31A1C"
    : d > 10000000
    ? "#FC4E2A"
    : d > 5000000
    ? "#FD8D3C"
    : d > 2000000
    ? "#FEB24C"
    : d > 1000000
    ? "#FED976"
    : "#FFEDA0";
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.Area),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  };
}

var geojson = L.geoJSON(geojsonFeature, { style: style }).addTo(modelMap);

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.7,
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
  info.update();
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}
function zoomToFeature(e) {
  modelMap.fitBounds(e.target.getBounds());
}
function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature,
  });
}

geojson = L.geoJson(geojsonFeature, {
  style: style,
  onEachFeature: onEachFeature,
}).addTo(modelMap);

var info = L.control();

info.onAdd = function (modelMap) {
  this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
  this.update();
  return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
  this._div.innerHTML =
    "<h4>NI Electoral Distrcits</h4>" +
    (props ? "<b>" + props.DEA : "Hover over electoral area");
};

info.addTo(modelMap);*/
