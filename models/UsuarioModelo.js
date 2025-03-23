const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        reputacion: { type: Number, default: 0 }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Usuario', UsuarioSchema);