const express = require('express');
const pedidoController = require("../controllers/pedidoController");

    const router = express.Router();
    let ctrl = new pedidoController();
    router.post("/gravar", ctrl.gravar);


module.exports = router;