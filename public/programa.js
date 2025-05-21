// Cargar el primer mapa cuando se abre la página
document.addEventListener("DOMContentLoaded", function () {
    mostrarSeccion('acerca-de');
});

// Coordenadas del lugar específico
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


// Función para mostrar las secciones al hacer clic en los enlaces
function mostrarSeccion(seccion) {
    // Primero ocultamos todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(s => s.style.display = 'none');

    // Luego mostramos la sección correspondiente
    const seccionMostrar = document.getElementById(seccion);
    if (seccionMostrar) {
        seccionMostrar.style.display = 'block';
    }

    // Cargar mapa en la sección "Acerca de" si es que se seleccionó
    if (seccion === 'acerca-de') {
        cargarMapa('mapa-acerca-de');
    }
    // Cargar mapa en la sección "Autor" si es que se seleccionó
    if (seccion === 'autor') {
        cargarMapa('mapa-autor');
    }
}

// Función para cargar el mapa en una sección
function cargarMapa(idElemento) {
    const mapa = L.map(idElemento).setView([4.7065055, -74.1353432], 13); // Coordenadas de Barrio Marandú, Engativá

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    // Crear el polígono para el Barrio Marandú
    const barrioMaranduPolygon = L.polygon([
       [4.709085, -74.133390],
       [4.706818, -74.131052],
       [4.704914, -74.132425],
       [4.707053, -74.133874],
    ], {
        color: 'blue',
        fillColor: 'cyan',
        fillOpacity: 0.5
    }).addTo(mapa);

    barrioMaranduPolygon.bindPopup('Barrio Marandú, Engativá').openPopup();
}

