//Invocando librerias
const express = require("express");
const router = express.Router();

const NotificacionController = require('../controller/ResennaController');

router.post("/",NotificacionController.crearResenna);
router.get("/", NotificacionController.obtenerResenna);
router.put("/:id", NotificacionController.actualizarResenna);
router.delete("/:id", NotificacionController.eliminarResenna);

module.exports = router;