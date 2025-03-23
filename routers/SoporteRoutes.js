//Invocando librerias
const express = require("express");
const router = express.Router();

const usuarioController = require('../controller/SoporteController');

router.post("/",usuarioController.crearSoporte);
router.get("/", usuarioController.obtenerSoporte);
router.put("/:id", usuarioController.actualizarSoporte);
router.delete("/:id", usuarioController.eliminarSoporte);

module.exports = router;