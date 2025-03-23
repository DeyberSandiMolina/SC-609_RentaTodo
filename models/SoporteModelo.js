const mongoose = require('mongoose');

const SoporteSchema = new mongoose.Schema(
    {
        ticket_id: { type: Number, required: true },
        usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
        descripcion: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Soporte', SoporteSchema);