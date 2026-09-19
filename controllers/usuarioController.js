const UsuarioModel = require("../models/usuarioModel")


class UsuarioController{
    
    async listarView(req,res){
        let usuario = new UsuarioModel();
        let lista = await usuario.listar();
        res.render("Usuario/Listar",{usuarios: lista});

    }

    async cadastrarView(req,res){
        res.render("usuario/cadastrar");
    }

    async cadastrar(req,res){
        console.log(req.body);
        if(req.body.nome != "" && req.body.email != "" && req.body.senha != "" && req.body.perfil != 0)
        {
            //preencher modelo com as informaçoes
            let usuario = new UsuarioModel(0, req.body.nome, req.body.email, req.body.senha, req.body.ativo, req.body.perfil);
            let okRetornoBanco = await usuario.cadastrar();
            res.send({ok: okRetornoBanco});
        }else{
        res.send({ok: false});
        }

    }
}

module.exports = UsuarioController