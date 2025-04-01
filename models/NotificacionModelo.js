const mongoose = require('mongoose');

const NotificacionSchema = new mongoose.Schema(
    {
        notificacion_id: { type: Number, required: true },
        usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
        mensaje: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Notifiacion', NotificacionSchema);