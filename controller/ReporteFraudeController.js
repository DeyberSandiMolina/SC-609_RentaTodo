const modeloReporteFraude = require("../models/ReporteFraudeModelo");

const crearReporteFraude = async (req, res)=>{
    try {
        const _datos = new modeloReporteFraude ( req.body );
        await _datos.save();
        res.status(201).json(_datos);
    } catch (error) {
        res.status(500).json( {
            error: "Error al crear"
        });
    }
};


//get obtener los datos

const obtenerReporteFraude = async (req, res)=>{
try {
    const _datos = await modeloReporteFraude.find();
    res.status(201).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al obtener el ReporteFraude"
    });
}
};



//Put
const actualizarReporteFraude = async (req, res)=>{
try {
 
    const _datos = await modeloReporteFraude.findByIdAndUpdate(req.params.id, req.body, {new: true} );
    res.status(200).json(_datos);
} catch (error) {
    res.status(500).json( {
        error: "Error al actualizar los datos"
    });
}
};

//Delete
const eliminarReporteFraude = async (req, res)=>{
try {
 
    const _datos = await modeloReporteFraude.findByIdAndDelete(req.params.id);
    res.status(200).json("Datos eliminados");
} catch (error) {
    res.status(500).json( {
        error: "Error al eliminar los datos"
    });
}
};
//get, post, delete put


module.exports = {
    actualizarReporteFraude,
    crearReporteFraude,
    eliminarReporteFraude,
    obtenerReporteFraude
};