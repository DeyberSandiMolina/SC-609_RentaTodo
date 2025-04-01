const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema(
    {
        objeto_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Objeto', required: true },
        arrendatario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
        fecha_inicio: { type: Date, required: true },
        fecha_fin: { type: Date, required: true },
        estado: { type: String, enum: ['pendiente', 'confirmada', 'cancelada'], default: 'pendiente' }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Reserva', ReservaSchema);
