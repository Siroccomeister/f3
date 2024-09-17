---
glightbox: false
---

# play with elevation

<link href='https://cdn.maptiler.com/maptiler-sdk-js/v2.2.2/maptiler-sdk.css' rel='stylesheet' />

body {
  margin: 0;
  padding: 0;
}

#map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

<div id="map"></div>
<div id="profileContainer"></div>

import { config, Map, helpers, MapStyle } from '@maptiler/sdk';

config.apiKey = '9HxmjmyEjR5Q6nvrTzN3';
const map = new Map({
    container: 'map', // container's id or the HTML element in which SDK will render the map
    style: MapStyle.OUTDOOR,
    center: [7.6011, 45.9078], // starting position [lng, lat]
    zoom: 11.39 // starting zoom
});

let polyline, epc, marker;

map.on('load', async () => {

  polyline = await helpers.addPolyline(map, {
    data: 'https://siroccomeister.github.io/f3/assets/gpx/GDMBR3.gpx', //from a URL or a MapTiler Data UUID
    lineColor: '#66f',
    lineWidth: 4,
    outline: true,
    outlineWidth: 2
  });

});

import { config, Map, helpers, MapStyle, Marker } from '@maptiler/sdk';

map.on('load', async () => {

  polyline = await helpers.addPolyline(map, {
    data: 'https://siroccomeister.github.io/f3/assets/gpx/GDMBR3.gpx', //from a URL or a MapTiler Data UUID
    lineColor: '#66f',
    lineWidth: 4,
    outline: true,
    outlineWidth: 2
  });

  marker = new Marker()
    .setLngLat([0, 0])
    .addTo(map);

});

import { ElevationProfileControl } from "@maptiler/elevation-profile-control";

map.on('load', async () => {

  polyline = await helpers.addPolyline(map, {
    data: 'https://docs.maptiler.com/sdk-js/assets/cervinia-valtournenche.gpx', //from a URL or a MapTiler Data UUID
    lineColor: '#66f',
    lineWidth: 4,
    outline: true,
    outlineWidth: 2
  });

  marker = new Marker()
    .setLngLat([0, 0])
    .addTo(map);

  // Create an instance
  epc = new ElevationProfileControl({
    container: "profileContainer",
    visible: true,
    showButton: false,
    profileLineColor: "#66f",
    profileBackgroundColor: "#a103fc11",
    displayTooltip: true,
    onMove: (data) => {
      marker.setLngLat(data.position)
    },
  });

  // Add it to your map
  map.addControl(epc);

  // Add some data (from a URL or a MapTiler Data UUID)
  const sourceObject = map.getSource(polyline.polylineSourceId);
  epc.setData(sourceObject._data);

  moveMarkerToGPXStart(sourceObject._data);

});

function moveMarkerToGPXStart(data) {
  marker.setLngLat(data.features[0].geometry.coordinates[0])
}

#profileContainer {
  background:#fff;
  width: 50vw;
  height: 200px;
  margin-top: 20px;
  position: absolute;
  bottom: 10px;
  opacity: 0.9;
}


# leaflet Map Playing Around

 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
 <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/2.1.2/gpx.min.js"></script>

<style type="text/css">
#mymap {
    width: auto;
    height: 400px;
    margin: 0;
}
</style>

<div id="mymap"></div>

<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", function() {
    
    var mymap = L.map('map');

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);

    const url = 'https://siroccomeister.github.io/f3/assets/gpx/GDMBR3.gpx';
    const options = {
      async: true,
      polyline_options: { color: 'red' },
      };

    const gpx = new L.GPX(url, options).on('loaded', (e) => {
      map.fitBounds(e.target.getBounds());
      }).addTo(map);

  })
</script>


# Conventions

## Navigation

Navigation structure is quite important.
Especially if you plan to use embedded images, as links tend to be relative.
Keep it as simple and user friendly as possible.
Test it from Mobile devices and browswers.

## For images

Activated GlightBox plugin in Mkdocs/Material theme.
More details can be looked-up [here](https://blueswen.github.io/mkdocs-glightbox/).

Some options are defined in the mkdocs.yml file to facilitate working with captions.

The simplest form :
![Image test](blog/posts/day0/MarocSelfie.jpg)

In general, I'd like to keep images in one folder : docs/assets
So that folder should be accessible with an absolute path that I can use from whatever markdown file.

However, for blog posts, it is easier to copy selected photos to a dedicated folder.
Then add a specific blog entry to reads from that folder with relative links.
In both cases, images will be handled via GlightBox.

After some research :
.. Markdown/MkDocs only converts / to /docs location for .md files.
All other files will default to relative path...

In addition, Image display can be somewhat enhanced.
This requires some html injection.

<figure markdown>

![My proud OpenUP](assets/images/openup.jpg){ width="200" }
<figcaption markdown>Part of my Tour Divide project</figcaption>

![Morocco Atlas](/../assets/images/0MarocSelfie.jpg){ width=“200” }
<figcaption markdown>Where decisions are getting matured</figcaption>

</figure>

## For hyperlinks
[Displayed Link](https://hyperlinked.website.com)

## For cards

::cards::

- title: Day 1
  content: Lorem ipsum dolor sit amet.
  image: assets/images/openup.jpg

- title: Day 1
  content: Lorem ipsum dolor sit amet.
  image: assets/images/Garmin_messenger.png

- title: Tour Divide
  url: https://bikepacking.com/routes/great-divide-mountain-bike-route-gdmbr/
  content: Lorem ipsum dolor sit amet.

::/cards::

!!! example "Morocco inspiration"
    Today I decided that I could make the tour divide!

    === "let's do it"
    <figure markdown>
    ![My Proud OpenUP is simply the best](day0/openup.jpg){ width="300px" }
    <figcaption>The journey actually started beginning 2023 when I purchased my Gravel from Open Cycle, kudos to Andy Kessler and Gerard Vroomen for their vision.</figcaption>
    </figure>

=== "let's do it"
    <figure markdown>
    ![My Proud OpenUP is simply the best](day0/openup.jpg){ width="300px" }
    </figure>

=== "no defined size"
    <figure markdown>
    ![My Proud OpenUP is simply the best](day0/MarocSelfie.jpg)
    </figure>

!!! notes ""
    <figure markdown>
    ![My Proud OpenUP is simply the best](day0/openup.jpg){ height="50px" }
    ![My Proud OpenUP is simply the best](day0/MarocSelfie.jpg){ height="50px" }
    </figure>

<!-- more -->
The simplest form :
![Image test](day0/MarocSelfie.jpg)

Image with Glightbox commenting.
![My Proud OpenUP](day0/openup.jpg){ data-title="My Proud OpenUP." data-description="It started beginning 2023 when I purchased my Gravel from Open Cycle, kudos to Andy Kessler and Gerard Vroomen for their vision." }

Image leveraging the figure meta-data (title is removed).
![My Proud OpenUP](day0/openup.jpg){ data-description="It started beginning 2023 when I purchased my Gravel from Open Cycle, kudos to Andy Kessler and Gerard Vroomen for their vision." }

Image with all data- removed. But added as caption.

<figure markdown>

![My Proud OpenUP is simply the best](day0/openup.jpg){ width="500px" }
<figcaption>The journey actually started beginning 2023 when I purchased my Gravel from Open Cycle, kudos to Andy Kessler and Gerard Vroomen for their vision.</figcaption>

</figure>

Working copy looks more promising…
![Image test](../../assets/images/openup.jpg)

<figure markdown>

![My proud OpenUP](../../assets/images/openup.jpg){ width="300" }
<figcaption markdown>Part of my Tour Divide project</figcaption>

![Morocco Atlas](../../assets/images/0MarocSelfie.jpg){ width=“300” }
<figcaption markdown>Where decisions are getting matured</figcaption>

</figure>

Ces quelques lignes visent à tester un blog qui puisse m'accompagner dans mon
Maybe I could write in my notebook.
and then copy over to repo...?
need also a workflow for pictures...
realistic?