const modeloPago = require("../models/PagoModelo");

const crearPago = async (req, res) => {
    try {
        const _datos = new modeloPago(req.body);
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json({
            error: "Error al procesar el pago"
        });
    }
};

// Obtener todos los pagos
const obtenerPagos = async (req, res) => {
    try {
        const _datos = await modeloPago.find();
        res.status(200).json(_datos);
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener los pagos"
        });
    }
};

// Actualizar un pago
const actualizarPago = async (req, res) => {
    try {
        const _datos = await modeloPago.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(_datos);
    } catch (error) {
        res.status(500).json({
            error: "Error al actualizar el pago"
        });
    }
};

// Eliminar un pago
const eliminarPago = async (req, res) => {
    try {
        await modeloPago.findByIdAndDelete(req.params.id);
        res.status(200).json("Pago eliminado");
    } catch (error) {
        res.status(500).json({
            error: "Error al eliminar el pago"
        });
    }
};

module.exports = {
    crearPago,
    obtenerPagos,
    actualizarPago,
    eliminarPago
};
