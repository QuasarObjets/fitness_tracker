// /mi-app-fitness/api/src/app.js

const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Configurar middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Configurar las rutas de usuarios
app.use('/usuarios', usuarioRoutes);

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación de fitness!');
});

module.exports = app;