const mongoose = require("mongoose");

const ObjetoSchema = new mongoose.Schema(
    {
        objeto_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        nombre: { type: String, required: true },
        categoria: { type: String, required: true },
        dueño_id: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
        precio_por_dia: { type: Number, required: true },
        estado: { type: String, enum: ["disponible", "alquilado"], default: "disponible" }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Objeto", ObjetoSchema);