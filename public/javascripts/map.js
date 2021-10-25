//seteo vista del mapa en las siguientes coordenadas
var map = L.map('main_map').setView([-34.60749519111387, -58.38872234544164], 13);

// cargo la capa de openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Agrego marcadores al mapa
L.marker([-34.602444067240974, -58.37391995541233]).addTo(map)
L.marker([-34.6174550614292, -58.37668259287601]).addTo(map)
L.marker([-34.62258312482379, -58.395420061816736]).addTo(map)