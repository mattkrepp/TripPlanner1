const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoicmF5bGVlOTcxMjI3IiwiYSI6ImNqaW01Y2w2ZzAwamczbG4wcGR0djRqeDAifQ.RMDGW_0mG29z9JJmTXcYew';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
