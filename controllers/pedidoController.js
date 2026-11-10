const PedidoItemModel = require("../models/pedidoItemModel");
const PedidoModel = require("../models/pedidoModel");
const ProdutoModel = require("../models/produtoModel");


class PedidoController {

    async gravar(req, res) {
        //para vermos o que foi enviado
        console.log(req.body);
        let ok = true;
        let msg = "";        
        //logica para persistir o pedido
        if(req.body.length > 0) {
            let p = new PedidoModel();
            p.pedidoData = new Date();
            if(await p.gravar()) {
                //p.pedidoId gerado;
                let valorTotal = 0;
                for(let i = 0; i < req.body.length; i++) {
                    let produtoId = req.body[i].id;
                    let quantidade = req.body[i].quantidade;
                    //busca o produto no banco para usar o valor confiavel
                    let produto = new ProdutoModel();
                    produto = await produto.buscarProduto(produtoId);
                    //gera o item
                    let item = new PedidoItemModel();
                    item.produtoId = produtoId;
                    item.pedidoId = p.pedidoId;
                    item.itemValorUnidade = produto.produtoValor;
                    item.itemQuantidade = quantidade;
                    item.itemValorTotal = produto.produtoValor * quantidade;
                    valorTotal += item.itemValorTotal;
                    //grava o pedido
                    await item.gravar();
                }
                //atualizar o pedido com o valor total
                p.pedidoValorTotal = valorTotal;
                await p.atualizar();
            }
            else {
                ok = false;
                msg = "Erro ao gravar pedido!";
            }
        }
        else {
            ok = false;
            msg = "Coloque pelo menos um item no carrinho!";
        }
        //faz um retorno
        res.send({ok: ok, msg: msg});
    }
}

module.exports = PedidoController;