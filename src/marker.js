
const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
}

const buildMarker = (type, coords) => {
  switch(type){
    case('activity'):
      const activityMarker = document.createElement("div"); // Create a new, detached DIV
      activityMarker.style.width = "32px";
      activityMarker.style.height = "39px";
      activityMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
      return new mapboxgl.Marker(activityMarker).setLngLat(coords);
      break;
    case('restaurants'):
      const restaurantMarker = document.createElement("div"); // Create a new, detached DIV
      restaurantMarker.style.width = "32px";
      restaurantMarker.style.height = "39px";
      restaurantMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
      return new mapboxgl.Marker(restaurantMarker).setLngLat(coords);
      break;
    case('hotel'):
      const hotelMarker = document.createElement("div"); // Create a new, detached DIV
      hotelMarker.style.width = "32px";
      hotelMarker.style.height = "39px";
      hotelMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
      return new mapboxgl.Marker(hotelMarker).setLngLat(coords);
      break;
  }
}


module.exports = buildMarker;
