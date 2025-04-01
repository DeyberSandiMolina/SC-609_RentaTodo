const express = require("express");
const router = express.Router();

const pagoController = require('../controller/PagoController');

router.post("/", pagoController.crearPago);
router.get("/", pagoController.obtenerPagos);
router.put("/:id", pagoController.actualizarPago);
router.delete("/:id", pagoController.eliminarPago);

module.exports = router;
