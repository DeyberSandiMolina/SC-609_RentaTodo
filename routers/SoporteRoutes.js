//Invocando librerias
const express = require("express");
const router = express.Router();

const soporteController = require('../controller/SoporteController');

router.post("/",soporteController.crearSoporte);
router.get("/", soporteController.obtenerSoporte);
router.put("/:id", soporteController.actualizarSoporte);
router.delete("/:id", soporteController.eliminarSoporte);

module.exports = router;
