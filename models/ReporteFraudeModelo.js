const mongoose = require('mongoose');

const ReporteFraudeSchema = new mongoose.Schema(
    {
        reporte_id: { type: Number, required: true },
        usuario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
        usuario_reportado_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },

        motivo: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('ReporteFraude', ReporteFraudeSchema);