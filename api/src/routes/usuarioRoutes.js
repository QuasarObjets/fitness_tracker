// /mi-app-fitness/api/src/routes/usuarioRoutes.js

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Ruta para obtener todos los usuarios
router.get('/usuarios', usuarioController.obtenerUsuarios);

// Ruta para obtener un usuario específico
router.get('/usuarios/:id', usuarioController.obtenerUsuario);

// Ruta para crear un nuevo usuario
router.post('/usuarios', usuarioController.crearUsuario);

// Ruta para actualizar un usuario existente
router.put('/usuarios/:id', usuarioController.actualizarUsuario);

// Ruta para eliminar un usuario
router.delete('/usuarios/:id', usuarioController.eliminarUsuario);

module.exports = router;