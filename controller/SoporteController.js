const modeloSoporte = require("../models/SoporteModelo");

const crearSoporte = async (req, res)=>{
    try {
        const _datos = new modeloSoporte ( req.body );
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al crear"
        });
    }
};


//get obtener los datos

const obtenerSoporte = async (req, res)=>{
try {
    const _datos = await modeloSoporte.find();
    res.status(201).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al obtener los usuarios"
    });
}
};



//Put
const actualizarSoporte = async (req, res)=>{
try {
 
    const _datos = await modeloSoporte.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al actualizar los datos"
    });
}
};

//Delete
const eliminarSoporte = async (req, res)=>{
try {
 
    const _datos = await modeloSoporte.findByIdAndDelete(req.params.id);
    res.status(200).json("Datos eliminados");
} catch (error) {
    res.status(500).json( {
        error: "Error al eliminar los datos"
    });
}
};
//get, post, delete put


module.exports = {
    actualizarSoporte,
    crearSoporte,
    eliminarSoporte,
    obtenerSoporte
};