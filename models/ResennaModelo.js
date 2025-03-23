const mongoose = require('mongoose');

const ResennaSchema = new mongoose.Schema(
    {
        resenna_id: { type: Number, required: true },
        usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
        calificacion: { type: Number, required: true },
        mensaje: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Resenna', ResennaSchema);