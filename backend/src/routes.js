const express = require("express");

const ClientesController = require ('./controllers/ClientesController');


const UsuarioController = require("./controllers/UsuarioController");
const Clientes = require("./models/Clientes");

const router = express.Router();

router.post("/login", UsuarioController.login);
router.get("/usuarios", UsuarioController.retornaUsuarios);
router.post("/usuarios", UsuarioController.adicionaUsuario);
router.post('/clientes', ClientesController.store);
router.get('/clientes', ClientesController.retornaClientes);


module.exports = router;
