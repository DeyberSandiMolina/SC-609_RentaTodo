//Invocando librerias
const express = require("express");
const router = express.Router();

const ReporteFraudeController = require('../controller/ResennaController');

router.post("/",ReporteFraudeController.crearResenna);
router.get("/", ReporteFraudeController.obtenerResenna);
router.put("/:id", ReporteFraudeController.actualizarResenna);
router.delete("/:id", ReporteFraudeController.eliminarResenna);

module.exports = router;