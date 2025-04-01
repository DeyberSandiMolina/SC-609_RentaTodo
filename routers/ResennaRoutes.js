//Invocando librerias
const express = require("express");
const router = express.Router();

const resennaController = require('../controller/ResennaController');

router.post("/",resennaController.crearResenna);
router.get("/", resennaController.obtenerResenna);
router.put("/:id", resennaController.actualizarResenna);
router.delete("/:id", resennaController.eliminarResenna);

module.exports = router;
