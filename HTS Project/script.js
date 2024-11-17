// Initialize the map
const map = L.map('map').setView([37.7749, -122.4194], 13); // Centered on San Francisco

// Add a tile layer (map background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Create a marker
const marker = L.marker([37.7749, -122.4194]).addTo(map);

// Simulate marker movement
const path = [
    [37.7749, -122.4194],
    [37.7750, -122.4184],
    [37.7755, -122.4170],
    [37.7760, -122.4155]
];

let index = 0;

function moveMarker() {
    if (index < path.length) {
        marker.setLatLng(path[index]);
        map.setView(path[index], 13); // Keeps the map centered on the marker
        index++;
        setTimeout(moveMarker, 1000); // Move every second
    }
}

moveMarker(); // Start the marker animation