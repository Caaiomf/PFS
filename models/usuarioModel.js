const Database = require("../database/database");

class UsuarioModel{

    #id;
    #nome;
    #email;
    #senha;
    #ativo;
    #perfilId;

    get id(){
        return this.#id;
    }

    set id(value){
        this.#id = value;
    }
    get nome(){
        return this.#nome;
    }

    set nome(value){
        this.#nome = value;
    }
    get email(){
        return this.#email;
    }

    set email(value){
        this.#email = value;
    }
    get senha(){
        return this.#senha;
    }

    set senha(value){
        this.#senha = value;
    }
    get ativo(){
        return this.#ativo;
    }

    set ativo(value){
        this.#ativo = value;
    }
    get perfilId(){
        return this.#perfilId;
    }

    set perfilId(value){
        this.#perfilId = value;
    }

    constructor(id, nome, email, senha, ativo, perfilId)
    {
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
        this.#ativo = ativo;
        this.#perfilId = perfilId;
    }


    async cadastrar(){
        let sql = "INSERT into tb_usuario (usu_nome, usu_email, usu_senha, usu_ativo, per_id) values (?, ?, ?, ?, ?)";
        let valores = [this.#nome, this.#email, this.#senha, this.#ativo, this.#perfilId];
        let banco = new Database();
        let result = await banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async listar(){
        let sql = "select * from tb_usuario";
        let banco = new Database();
        let linhas = await banco.ExecutaComando(sql);
        let lista = [];
        for(let i =0; i<linhas.length; i++) {
            let linha = linhas[i];
            let usuario = new UsuarioModel(linha["usu_id"], linha["usu_nome"], linha["usu_email"], linha["usu_senha"], linha["usu_ativo"], linha["per_id"]);
            lista.push(usuario);
        }
        return lista;
    }
}

module.exports= UsuarioModel;