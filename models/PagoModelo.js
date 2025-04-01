const mongoose = require('mongoose');

const PagoSchema = new mongoose.Schema(
    {
        reserva_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Reserva', required: true },
        monto: { type: Number, required: true },
        estado: { type: String, enum: ['pendiente', 'completado', 'fallido'], default: 'pendiente' }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Pago', PagoSchema);
