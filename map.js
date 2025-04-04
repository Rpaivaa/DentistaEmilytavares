var map = L.map('mapid').setView([-23.5505, -46.6333], 14); // Coordenadas de São Paulo, Brasil
  
  // Adicionar o mapa do OpenStreetMap
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

  // Adicionar um marcador no mapa
  L.marker([-23.5505, -46.6333]).addTo(map)
    .bindPopup('Localização Exemplo')
    .openPopup();