
//Declaração de classe
class AulaController {

    //metodo que sera vinculado a rota raiz(/)
    rotaRaiz(req, res){
        console.log(req);
        res.send("Ola!");
    }

    //metodo que sera vinculado a outra rota
    rotaAula(req, res){
        res.send("Nossa Rota para a aula de PFS")
    }
}

//exportar a classe
module.exports = AulaController;