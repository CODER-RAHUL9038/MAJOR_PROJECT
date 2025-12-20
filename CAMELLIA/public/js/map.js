maptilersdk.config.apiKey = MAPTILER_KEY;

const map = new maptilersdk.Map({
  container: "map",
  style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_KEY}`,
  center: coords,
  zoom: 12,
  projection: "globe", //enable globe projection
});


new maptilersdk.Marker({ color: "ff385c" }).setLngLat(coords).addTo(map);
