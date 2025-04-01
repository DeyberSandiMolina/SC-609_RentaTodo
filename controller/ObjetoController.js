const modeloObjeto = require("../models/ObjetoModelo");

const ingresarObjeto = async (req, res) => {
    try {
        const _datos = new modeloObjeto(req.body);
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json({ error: "Error al ingresar el objeto" });
    }
};

const obtenerObjetos = async (req, res) => {
    try {
        const _datos = await modeloObjeto.find();
        res.status(200).json(_datos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los objetos" });
    }
};

const actualizarObjeto = async (req, res) => {
    try {
        const _datos = await modeloObjeto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(_datos);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el objeto" });
    }
};

const eliminarObjeto = async (req, res) => {
    try {
        await modeloObjeto.findByIdAndDelete(req.params.id);
        res.status(200).json("Objeto eliminado");
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el objeto" });
    }
};

module.exports = {
    ingresarObjeto,
    obtenerObjetos,
    actualizarObjeto,
    eliminarObjeto
};