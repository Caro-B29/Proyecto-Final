 // Coordenadas del lugar específico, por ejemplo: Ciudad de México
 var lat = 4.7065055;
 var lon = -74.1353432;
 var zoom = 13;

 // Crear el mapa
 var map = L.map('map').setView([lat, lon], zoom);

 // Cargar una capa base (OpenStreetMap)
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '© OpenStreetMap contributors'
 }).addTo(map);

 // Agregar un marcador
 L.marker([lat, lon]).addTo(map)
   .bindPopup('Aquí está el lugar específico.')
   .openPopup();

// Añadir capa de mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Crear un polígono para el barrio Marandú (por ejemplo, estas son coordenadas de muestra)
const barrioMaranduPolygon = L.polygon([
    [4.709085, -74.133390],
    [4.707808, -74.133819],
    [4.706818, -74.131052],
    [4.704914, -74.132425],
    [4.707224, -74.133804],
    [4,705529, -74.133450],
    [4.706858, -74.133553],
    [4.707240, -74.133796],
], {
    color: 'blue',
    fillColor: 'cyan',
    fillOpacity: 0.5
}).addTo(map);

// Añadir título al mapa
barrioMaranduPolygon.bindPopup('Barrio Marandú, Engativá').openPopup();
