const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYm9iYnl0MTk5NyIsImEiOiJja2MwcGg3MzExbGdnMndxZmw3YWpidTRzIn0.UAQSFcXAAD51kaE6jPJQ4g";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngfind.com%2Fmpng%2FxhmbbJ_location-poi-pin-marker-position-red-map-google%2F&psig=AOvVaw0EhDnkVqMc2ESrd7JNCnl5&ust=1593534905741000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjt1KO6p-oCFQAAAAAdAAAAABAD)";

new mapboxgl.Marker(markerDomEl).setLngLat([-87.6354, 41.8885]).addTo(map);
