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