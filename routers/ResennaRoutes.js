//Invocando librerias
const express = require("express");
const router = express.Router();

const usuarioController = require('../controller/ResennaController');

router.post("/",usuarioController.crearResenna);
router.get("/", usuarioController.obtenerResenna);
router.put("/:id", usuarioController.actualizarResenna);
router.delete("/:id", usuarioController.eliminarResenna);

module.exports = router;