const express = require("express");
const expressEjsLayout = require("express-ejs-layouts")
const aulaRouter = require("./routes/aulaRoutes")
const usuarioRouter = require("./routes/usuarioRoute");
const server = express();

server.set("view engine", "ejs");

//configurando o caminho para a pasta public
server.use(express.static("public"));

//configuração da pagina de layout, ela servira para renderizar o HTML em comum nas nossas paginas
server.set("layout", "./layout.ejs");
server.use(expressEjsLayout);
//Configurando desserialização para submissão de formularios(req.body);
server.use(express.urlencoded());
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
server.use("/usuario", usuarioRouter);

//iniciando servidor web
server.listen(5000, function() {
    console.log("Servidor web funcionando!");
})
