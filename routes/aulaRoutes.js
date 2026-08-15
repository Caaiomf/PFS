
const express = require("express");
const AulaController = require("../controllers/aulaController");

const router = express.Router();

let controller = new AulaController()
router.get("/", controller.rotaRaiz);
router.get("/aula/pfs", controller.rotaAula);
router.get("/carro", controller.rotaCarros);

module.exports = router;