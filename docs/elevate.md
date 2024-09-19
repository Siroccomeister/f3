---
glightbox: false
---

<!-- leaflet-ui -->
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
<script src="https://unpkg.com/leaflet-ui@0.6.0/dist/leaflet-ui.js"></script>
<!-- leaflet-elevation -->
<link rel="stylesheet" href="https://unpkg.com/@raruto/leaflet-elevation@2.5.1/dist/leaflet-elevation.min.css" />
<script src="https://unpkg.com/@raruto/leaflet-elevation@2.5.1/dist/leaflet-elevation.min.js"></script>

<style> #map { width: auto; height: 400px; margin: 0;} </style>
<div id="map"></div>

<script>
document.addEventListener("DOMContentLoaded", function() {

let opts = {
   map: {
      center: [41.4583, 12.7059],
      zoom: 5,
      mapTypeId: 'topo',
      locateControl: false,
      searchControl: false,
      minimapControl: false,
      fullscreenControl: false,
      editInOSMControl: false,
      pegmanControl: false,
      layersControl: false,
      resizerControl: false,
      preferCanvas: true,
      rotate: false,
        rotateControl: {
          closeOnZeroBearing: true
        },
      },

  elevationControl: {
    url: "https://siroccomeister.github.io/f3/assets/gpx/GDMBR3.gpx",
    options: {
        theme: "lightblue-theme",
        height: 150,
        dragging: true,
        collapsed: true,
        autohide: false,
        autofitBounds: true,
        position: "bottomleft",
        detached: true,
        summary: "inline",
        imperial: false,
        // altitude: "disabled",
        slope: "summary",
        speed: false,
        acceleration: false,
        time: "summary",
        legend: true,
        followMarker: true,
        almostOver: true,
        distanceMarkers: true,
        downloadLink: false,
        hotline: false,
      },
  },

  layersControl: {
    options: {
        collapsed: false,
      },
  },
};

let map = L.map('map', opts.map);
let controlElevation = L.control.elevation(opts.elevationControl.options).addTo(map);
let controlLayer = L.control.layers(null, null, opts.layersControl.options);

controlElevation.load(opts.elevationControl.url);
controlElevation.on('eledata_loaded', ({layer, name}) => controlLayer.addTo(map) && layer.eachLayer((trkseg) => trkseg.feature.geometry.type != "Point" && controlLayer.addOverlay(trkseg, trkseg.feature && trkseg.feature.properties && trkseg.feature.properties.name || name)));

})
</script>
