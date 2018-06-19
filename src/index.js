const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "YOUR API TOKEN HERE";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});

console.log("Hello index.js!");