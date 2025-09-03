// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 80;

let latestLocation = { lat: 0, lng: 0 };

app.use(bodyParser.json());

// Recibir ubicación
app.post('/location', (req, res) => {
  const { latitude, longitude } = req.body;
  latestLocation = { lat: latitude, lng: longitude };
  console.log('Ubicación recibida:', latestLocation);
  res.send({ status: 'OK', latestLocation });
});

// Mostrar ubicación
app.get('/', (req, res) => {
  res.send(`
    <h1>Ubicación actual</h1>
    <p>Latitud: ${latestLocation.lat}</p>
    <p>Longitud: ${latestLocation.lng}</p>
    <a href="https://www.google.com/maps?q=${latestLocation.lat},${latestLocation.lng}" target="_blank">Ver en Google Maps</a>
  `);
});

app.listen(PORT, () => console.log(`Servidor en http://0.0.0.0:${PORT}`));
