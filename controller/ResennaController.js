const modeloResenna = require("../models/ResennaModelo");

const crearResenna = async (req, res)=>{
    try {
        const _datos = new modeloResenna ( req.body );
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al crear"
        });
    }
};


//get obtener los datos

const obtenerResenna = async (req, res)=>{
try {
    const _datos = await modeloResenna.find();
    res.status(201).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al obtener los usuarios"
    });
}
};



//Put
const actualizarResenna = async (req, res)=>{
try {
 
    const _datos = await modeloResenna.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al actualizar los datos"
    });
}
};

//Delete
const eliminarResenna = async (req, res)=>{
try {
 
    const _datos = await modeloResenna.findByIdAndDelete(req.params.id);
    res.status(200).json("Datos eliminados");
} catch (error) {
    res.status(500).json( {
        error: "Error al eliminar los datos"
    });
}
};
//get, post, delete put


module.exports = {
    actualizarResenna,
    crearResenna,
    eliminarResenna,
    obtenerResenna
};