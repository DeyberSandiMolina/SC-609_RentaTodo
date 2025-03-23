const modeloUsuario = require("../models/UsuarioModelo");

const crearUsuario = async (req, res)=>{
    try {
        const _datos = new modeloUsuario ( req.body );
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al crear"
        });
    }
};


//get obtener los datos

const obtenerUsuario = async (req, res)=>{
try {
    const _datos = await modeloUsuario.find();
    res.status(201).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al obtener los usuarios"
    });
}
};



//Put
const actualizarUsuario = async (req, res)=>{
try {
 
    const _datos = await modeloUsuario.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al actualizar los datos"
    });
}
};

//Delete
const eliminarUsuario = async (req, res)=>{
try {
 
    const _datos = await modeloUsuario.findByIdAndDelete(req.params.id);
    res.status(200).json("Datos eliminados");
} catch (error) {
    res.status(500).json( {
        error: "Error al eliminar los datos"
    });
}
};
//get, post, delete put


module.exports = {
    actualizarUsuario,
    crearUsuario,
    eliminarUsuario,
    obtenerUsuario
};