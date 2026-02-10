document.addEventListener("DOMContentLoaded", function() {

// Function to proxy GPX URLs through your Vercel CORS proxy
function proxyGpxUrl(localPath) {
  const baseUrl = 'https://siroccomeister.github.io/f3';
  const proxyUrl = 'https://proxy-cors-azure.vercel.app/api/gpx-proxy?url=';
  return proxyUrl + baseUrl + localPath;
}

let opts = {
   map: {
      center: [51.1784, -115.5708], // should be set to BANFF
      zoom: 8,
      mapTypeId: 'topo', 
      dragging: true,
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
    url: "none",
    options: {
        theme: "lightblue-theme",
        height: 150,
        dragging: true,
        collapsed: false,
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
        followMarker: false,
        almostOver: true,
        distanceMarkers: true,
        downloadLink: false,
        hotline: false,
        gestureHandling: false,
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

// Load GPX through proxy to avoid CORS issues
controlElevation.load(proxyGpxUrl(mygpxurl));

controlElevation.on('eledata_loaded', ({layer, name}) => controlLayer.addTo(map) && layer.eachLayer((trkseg) => trkseg.feature.geometry.type != "Point" && controlLayer.addOverlay(trkseg, trkseg.feature && trkseg.feature.properties && trkseg.feature.properties.name || name)));

})
