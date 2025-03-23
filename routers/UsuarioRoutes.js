//Invocando librerias
const express = require("express");
const router = express.Router();

const usuarioController = require('../controller/UsuarioController');

router.post("/",usuarioController.crearUsuario);
router.get("/", usuarioController.obtenerUsuario);
router.put("/:id", usuarioController.actualizarUsuario);
router.delete("/:id", usuarioController.eliminarUsuario);

module.exports = router;
