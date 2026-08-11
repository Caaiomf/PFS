
//Declaração de classe
class AulaController {

    //metodo que sera vinculado a rota raiz(/)
    rotaRaiz(req, res){
        console.log(req);
        res.render("index");
    }

    //metodo que sera vinculado a outra rota
    rotaAula(req, res){
        res.render("aula");
    }
}

//exportar a classe
module.exports = AulaController;