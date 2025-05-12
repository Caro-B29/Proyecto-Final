 // Coordenadas del lugar específico: Universidad Distrital
 var lat = 4.61798365;
 var lon = -74.0612434411595;
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

   var marker = L.marker([4.61798365, -74.0612434411595]).addTo(map);
   