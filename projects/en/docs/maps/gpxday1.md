---
glightbox: false
---

# Day 1 map and gpx data visualisation

This page is testing two different visualisations of my GPX files. One leverages MAPBOX and the more sophisticated [gpx.studio toolbox](https://gpx.studio). The other relies on LEAFLET and D3JS (based on [Raruto's work](https://raruto.github.io/leaflet-elevation/)), which is great but annoyingly will not display the moving cursor on the map. 

Interesting to see how the same gpx data translates into different statistics - especially on the cumulative elevation for instance.

<iframe src="https://gpx.studio/embed?options=%7B%22token%22%3A%22pk.eyJ1IjoiZmFuYXRpYzgiLCJhIjoiY204cGt2NXYxMGNtczJtc2FvYmEzY2dwYyJ9.TAWriXunFQTETsyR0MNxYQ%22%2C%22files%22%3A%5B%22https%3A%2F%2Fsiroccomeister.github.io%2Ff3%2Fen%2Fassets%2Fgpx%2FGPX1.gpx%22%5D%2C%22elevation%22%3A%7B%22fill%22%3A%22surface%22%7D%2C%22distanceMarkers%22%3Atrue%7D" width="100%" height="600px" frameborder="0" style="outline: none;"/>

<br><br>

<style> #map { width: auto; height: 400px; margin: 0;} </style>

<div id="map"></div>

<script> 
var mygpxurl = "/f3/en/assets/gpx/GPX1.gpx";
</script>

<script src="/f3/en/javascripts/mygpx.js"></script>

