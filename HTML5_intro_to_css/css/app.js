var map = L.map('map').setView([39.8283, -98.5795], 4); // Set initial view to show North America

// Set up OpenStreetMap as the tile layer for the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Example: Adding a marker for New Orleans (USA)
L.marker([29.9511, -90.0715]).addTo(map)
    .bindPopup('<b>New Orleans</b><br>Famous Mardi Gras Celebration')
    .openPopup();

// Example: Adding a marker for Rio de Janeiro (Brazil)
L.marker([-22.9068, -43.1729]).addTo(map)
    .bindPopup('<b>Rio de Janeiro</b><br>Famous Carnival Celebration')
    .openPopup();