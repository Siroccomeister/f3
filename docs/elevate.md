
  <script src="https://cdn.maptiler.com/maptiler-sdk-js/v2.2.2/maptiler-sdk.umd.js"></script>
  <link href="https://cdn.maptiler.com/maptiler-sdk-js/v2.2.2/maptiler-sdk.css" rel="stylesheet" />
  <script src="https://cdn.maptiler.com/maptiler-elevation-profile-control/v2.0.0/maptiler-elevation-profile-control.js"></script>
  <style>
    body { margin: 0; padding: 0; }
    #map { position: absolute; top: 0; bottom: 0; width: 100%; }
  </style>

  <div id="map"></div>

  <script>
    maptilersdk.config.apiKey = '9HxmjmyEjR5Q6nvrTzN3';
    const map = new maptilersdk.Map({
      container: 'map', // container's id or the HTML element in which the SDK will render the map
      style: maptilersdk.MapStyle.OUTDOOR,
      center: [0.57705, 42.68311], // starting position [lng, lat]
      zoom: 12.22, // starting zoom
    });

    map.on('ready', () => {
      maptilersdk.helpers.addPolyline(map, {
        data: 'https://siroccomeister.github.io/f3/assets/gpx/GDMBR3.gpx', //from a URL or a MapTiler Data UUID
        lineColor: '#66f',
        lineWidth: 4,
        outline: true,
        outlineWidth: 2
      });

      // Create an instance
      const epc = new maptilerelevationprofilecontrol.ElevationProfileControl({
        visible: true
      });

      // Add it to your map
      map.addControl(epc);

      // Add some data (from a URL or a MapTiler Data UUID)
      epc.setData('YOUR_MAPTILER_DATASET_ID_HERE');
    });
  </script>