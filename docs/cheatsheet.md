---
glightbox: false
---

# play with elevation

<style> html, body, #map, #elevation-div { height: 100%; width: 100%; padding: 0; margin: 0; } #map { height: 75%; } #elevation-div {	height: 25%; font: 12px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif; } </style>

<!-- leaflet-ui -->
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
 <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>

 <!-- leaflet-elevation -->
 <link rel="stylesheet" href="https://unpkg.com/@raruto/leaflet-elevation/dist/leaflet-elevation.css" />
 <script src="https://unpkg.com/@raruto/leaflet-elevation/dist/leaflet-elevation.js"></script>
 
  <div id="map"></div>

 <script>
   // Full list options at "leaflet-elevation.js"
   var elevation_options = {

     // Default chart colors: theme lime-theme, magenta-theme, ...
     theme: "lightblue-theme",

     // Chart container outside/inside map container
     detached: true,

     // if (detached), the elevation chart container
     elevationDiv: "#elevation-div",

     // if (!detached) autohide chart profile on chart mouseleave
     autohide: false,

     // if (!detached) initial state of chart profile control
     collapsed: false,
        
     // if (!detached) control position on one of map corners
     position: "topright",
        
     // Toggle close icon visibility
     closeBtn: true,

     // Autoupdate map center on chart mouseover.
     followMarker: true,

     // Autoupdate map bounds on chart update.
     autofitBounds: true,

     // Chart distance/elevation units.
     imperial: false,

     // [Lat, Long] vs [Long, Lat] points. (leaflet default: [Lat, Long])
     reverseCoords: false,

     // Acceleration chart profile: true || "summary" || "disabled" || false
     acceleration: false,

     // Slope chart profile: true || "summary" || "disabled" || false
     slope: false,

     // Speed chart profile: true || "summary" || "disabled" || false
     speed: false,

     // Altitude chart profile: true || "summary" || "disabled" || false
     altitude: true,

     // Display time info: true || "summary" || false
     time: true,

     // Display distance info: true || "summary" || false
     distance: true,

     // Summary track info style: "inline" || "multiline" || false
     summary: 'multiline',

     // Download link: "link" || false || "modal"
     downloadLink: 'link',

     // Toggle chart ruler filter
     ruler: true,

     // Toggle chart legend filter
     legend: true,

     // Toggle "leaflet-almostover" integration
     almostOver: true,

     // Toggle "leaflet-distance-markers" integration
     distanceMarkers: false,

     // Toggle "leaflet-edgescale" integration
     edgeScale: false,
        
     // Toggle "leaflet-hotline" integration
     hotline: true,

     // Display track datetimes: true || false
     timestamps: false,

     // Display track waypoints: true || "markers" || "dots" || false
     waypoints: true,

     // Toggle custom waypoint icons: true || { associative array of <sym> tags } || false
     wptIcons: {
       '': L.divIcon({
         className: 'elevation-waypoint-marker',
         html: '<i class="elevation-waypoint-icon"></i>',
         iconSize: [30, 30],
         iconAnchor: [8, 30],
       }),
     },

     // Toggle waypoint labels: true || "markers" || "dots" || false
     wptLabels: true,

     // Render chart profiles as Canvas or SVG Paths
     preferCanvas: true,

   };

   // Instantiate map (leaflet-ui).
   var map = L.map('map', { mapTypeId: 'terrain', center: [41.4583, 12.7059], zoom: 5 });

   // Instantiate elevation control.
   var controlElevation = L.control.elevation(elevation_options).addTo(map);

   // Load track from url (allowed data types: "*.geojson", "*.gpx", "*.tcx")
   controlElevation.load("https://siroccomeister.github.io/f3/assets/gpx/GDMBR3.gpx");

 </script>  








# leaflet Map Playing Around

 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
 <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/2.1.2/gpx.min.js"></script>

<style type="text/css">
#map {
    width: auto;
    height: 400px;
    margin: 0;
}
</style>

<div id="map"></div>

<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", function() {
    
    var map = L.map('map');

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

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