var map = L.map('map').setView([38.5,-90.5], 10);

  // load a tile layer
var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Name": "Grand Station",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.236309,
          38.6290211
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Planthaven Farms - O'Fallon",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.6912338,
          38.8496983
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Blueberry Hill",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.3072203,
          38.6558215
        ]
      }
    },
        {
      "type": "Feature",
      "properties": {
        "Name": "Jefferson Barracks Park",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.2992942,
          38.4994732
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Walmart Supercenter Maplewood",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.3332046,
          38.6213841
        ]
      }
    }
  ]
};

L.geoJson(geojsonFeature, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.Name);
    },
}).addTo(map);
