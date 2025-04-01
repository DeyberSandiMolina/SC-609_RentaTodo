//Invocando librerias
const express = require("express");
const router = express.Router();

const NotificacionController = require('../controller/NotificacionController');

router.post("/",NotificacionController.crearNotificacion);
router.get("/", NotificacionController.obtenerNotificacion);
router.put("/:id", NotificacionController.actualizarNotificacion);
router.delete("/:id", NotificacionController.eliminarNotificacion);

module.exports = router;
