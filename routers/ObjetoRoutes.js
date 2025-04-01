const express = require("express");
const router = express.Router();
const objetoController = require("../controller/ObjetoController");

router.post("/", objetoController.ingresarObjeto);
router.get("/", objetoController.obtenerObjetos);
router.put("/:id", objetoController.actualizarObjeto);
router.delete("/:id", objetoController.eliminarObjeto);

module.exports = router;