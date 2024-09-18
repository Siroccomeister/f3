---
glightbox: false
---

<head>
<link rel="dns-prefetch" href="https://tile.openstreetmap.org">
<link rel="dns-prefetch preconnect" href="https://unpkg.com" />
<link rel="preload" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" as="script">
<link rel="preload" href="https://unpkg.com/leaflet-ui@0.6.0/dist/leaflet-ui.js" as="script">
<!-- leaflet-ui -->
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
<script src="https://unpkg.com/leaflet-ui@0.6.0/dist/leaflet-ui.js"></script>
<!-- leaflet-elevation -->
<link rel="stylesheet" href="https://unpkg.com/@raruto/leaflet-elevation@2.5.1/dist/leaflet-elevation.min.css" />
<script src="https://unpkg.com/@raruto/leaflet-elevation@2.5.1/dist/leaflet-elevation.min.js"></script>
</head>

<style type="text/css">
#map { width: auto; height: 400px; margin: 0; }
</style>

<body>

<div id="map"></div>

<script>
		let opts = {
			map: {
				center: [41.4583, 12.7059],
				zoom: 5,
				fullscreenControl: false,
				resizerControl: true,
				preferCanvas: true,
				rotate: true,
				// bearing: 45,
				rotateControl: {
					closeOnZeroBearing: true
				},
			},
			elevationControl: {
				url: "https://raruto.github.io/leaflet-elevation/examples/via-emilia.gpx",
				options: {
					theme: "lightblue-theme",
					collapsed: false,
					autohide: false,
					autofitBounds: true,
					position: "bottomleft",
					detached: true,
					summary: "inline",
					imperial: false,
					// altitude: "disabled",
					slope: "disabled",
					speed: false,
					acceleration: false,
					time: "summary",
					legend: true,
					followMarker: true,
					almostOver: true,
					distanceMarkers: false,
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

		controlElevation.on('eledata_loaded', ({layer, name}) => controlLayer.addTo(map) && layer.eachLayer((trkseg) => trkseg.feature.geometry.type != "Point" && controlLayer.addOverlay(trkseg, trkseg.feature && trkseg.feature.properties && trkseg.feature.properties.name || name)));

		controlElevation.load(opts.elevationControl.url);
</script>
</body>
