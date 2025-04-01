const modeloReserva = require("../models/ReservaModelo");

const crearReserva = async (req, res) => {
    try {
        const _datos = new modeloReserva(req.body);
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json({
            error: "Error al crear la reserva"
        });
    }
};

// Obtener todas las reservas
const obtenerReservas = async (req, res) => {
    try {
        const _datos = await modeloReserva.find();
        res.status(200).json(_datos);
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener las reservas"
        });
    }
};

// Actualizar una reserva
const actualizarReserva = async (req, res) => {
    try {
        const _datos = await modeloReserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(_datos);
    } catch (error) {
        res.status(500).json({
            error: "Error al actualizar la reserva"
        });
    }
};

// Eliminar una reserva
const eliminarReserva = async (req, res) => {
    try {
        await modeloReserva.findByIdAndDelete(req.params.id);
        res.status(200).json("Reserva eliminada");
    } catch (error) {
        res.status(500).json({
            error: "Error al eliminar la reserva"
        });
    }
};

module.exports = {
    crearReserva,
    obtenerReservas,
    actualizarReserva,
    eliminarReserva
};
