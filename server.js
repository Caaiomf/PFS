const express = require("express");
const aulaRouter = require("./routes/aulaRoutes")

const server = express();

// //rota raiz
// server.get("/", function(req, res) {
//     console.log(req);
//     res.send("Ola!");
// })

// server.get("/Aula/pfs", function(req, res) {
//     res.send("Nossa rota para a aula de PFS");
// })

//chamada das nossas rotas que estao no arquivo AulaRoutes
server.use("/", aulaRouter);

//iniciando servidor web
server.listen(5000, function() {
    console.log("Servidor web funcionando!");
})
