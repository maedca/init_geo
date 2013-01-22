function geo() {

	document.getElementById('basicMap').innerHTML = "";
	document.getElementById('anzeige').innerHTML = "";

    map = new OpenLayers.Map("basicMap");
    var mapnik = new OpenLayers.Layer.OSM();
    map.addLayer(mapnik);


    navigator.geolocation.getCurrentPosition(function (position) {
        document.getElementById('anzeige').innerHTML = "Latitude: " + position.coords.latitude + "   Longitude: " + position.coords.longitude + "<p>";
        var lonLat = new OpenLayers.LonLat(position.coords.longitude,
        position.coords.latitude)
            .transform(
        new OpenLayers.Projection("EPSG:4326"), //transform from WGS 1984
        map.getProjectionObject() //to Spherical Mercator Projection
        );

        markers.addMarker(new OpenLayers.Marker(lonLat));

        map.setCenter(lonLat, 14 // Zoom level
        );

    });
    //map = new OpenLayers.Map("basicMap");
    //var mapnik = new OpenLayers.Layer.OSM();
    //map.addLayer(mapnik);
    map.setCenter(new
    OpenLayers.LonLat(3, 3) // Center of the map
    .transform(
    new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
    new OpenLayers.Projection("EPSG:900913") // to Spherical Mercator Projection
    ), 15 // Zoom level
    );
    var markers = new OpenLayers.Layer.Markers("Markers");
    map.addLayer(markers);

}