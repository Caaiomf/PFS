


class pedidoController{

    async gravar(req, res){
        console.log(req.body);
        //logica para persistir o pedido

        //faz um retorno
        res.send({ok:true});
    }


}

module.exports = pedidoController;