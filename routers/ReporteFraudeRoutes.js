//Invocando librerias
const express = require("express");
const router = express.Router();

const ReporteFraudeController = require('../controller/ReporteFraudeController');

router.post("/",ReporteFraudeController.crearReporteFraude);
router.get("/", ReporteFraudeController.obtenerReporteFraude);
router.put("/:id", ReporteFraudeController.actualizarReporteFraude);
router.delete("/:id", ReporteFraudeController.eliminarReporteFraude);

module.exports = router;
