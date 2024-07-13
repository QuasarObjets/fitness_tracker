// /mi-app-fitness/api/src/models/usuarioModel.js

const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  altura: {
    type: Number,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
  objetivo: {
    type: String,
    required: true
  },
  fechaRegistro: {
    type: Date,
    default: Date.now
  }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;