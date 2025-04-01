const modeloNotificacion = require("../models/NotificacionModelo");

const crearNotificacion = async (req, res)=>{
    try {
        const _datos = new modeloNotificacion ( req.body );
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al crear"
        });
    }
};


//get obtener los datos

const obtenerNotificacion = async (req, res)=>{
try {
    const _datos = await modeloNotificacion.find();
    res.status(201).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al obtener la Notificacion"
    });
}
};



//Put
const actualizarNotificacion = async (req, res)=>{
try {
 
    const _datos = await modeloNotificacion.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al actualizar los datos"
    });
}
};

//Delete
const eliminarNotificacion = async (req, res)=>{
try {
 
    const _datos = await modeloNotificacion.findByIdAndDelete(req.params.id);
    res.status(200).json("Datos eliminados");
} catch (error) {
    res.status(500).json( {
        error: "Error al eliminar los datos"
    });
}
};
//get, post, delete put


module.exports = {
    actualizarNotificacion,
    crearNotificacion,
    eliminarNotificacion,
    obtenerNotificacion
};