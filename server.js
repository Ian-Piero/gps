// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 80;

let latestLocation = { lat: -12.0464, lng: -77.0428 }; // Valor inicial (Lima)

app.use(bodyParser.json());
app.use(express.static('public'));

// Recibir ubicación desde Android
app.post('/location', (req, res) => {
  const { latitude, longitude } = req.body;
  latestLocation = { lat: latitude, lng: longitude };
  console.log('Ubicación recibida:', latestLocation);
  res.json({ status: 'OK' });
});

// Entregar última ubicación
app.get('/latest', (req, res) => {
  res.json(latestLocation);
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`));
