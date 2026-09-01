const UsuarioModel = require("../models/usuarioModel")


class UsuarioController{
    
    async listarView(req,res){
        let usuario = new UsuarioModel();
        let lista = await usuario.listar();
        res.render("Usuario/Listar",{usuarios: lista});

    }
}

module.exports = UsuarioController