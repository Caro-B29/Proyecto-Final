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
   
   //abrir el archivo Geojson
   //Javascript se ejecuta de tal manera que si una linea de codig se demora, se pasa  ala siguiente sin esperar. 
   //Esto puede generar problemas cuando se requiere secuencialidad 

   async function cargarpuntos(){
   var miArchivo= await fetch("Micro.geojson");
   //Convertir el contenido a json: objeto js
   var datos= await miArchivo.json();
   let listafeatures= datos["features"];
   
   listasfeature[0]
   //Leer el archivo
   console.log(datos);
   for(let i=0;i<10;i++){
    let miCoordenadas= listaFeature[i]["geometry"]["coordinates"];
    var miMarcador= L.marker(misCoordenadas);
    miMarcador.addTo(map);

   }
  


   }
   
cargarpuntos();
