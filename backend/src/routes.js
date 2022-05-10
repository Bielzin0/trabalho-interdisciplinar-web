const express = require("express");

const UsuarioController = require("./controllers/UsuarioController");

const router = express.Router();

router.post("/login", UsuarioController.login);
router.get("/usuarios", UsuarioController.retornaUsuarios);
router.post("/usuarios", UsuarioController.adicionaUsuario);

module.exports = router;
