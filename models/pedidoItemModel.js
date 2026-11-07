const Database = require("../db/database");


class pedidoItemModel{

    #itemId;
    #pedidoId;
    #produtoId;
    #itemValorUnidade;
    #itemQuantidade;
    #itemValorTotal;

    get itemId(){return this.#itemId}
    set itemId(value){ this.#itemId = value};

    get pedidoId(){return this.#pedidoId}
    set pedidoId(value){ this.#pedidoId = value};

    get produtoId(){return this.#produtoId}
    set produtoId(value){ this.#produtoId = value};

    get itemValorUnidade(){return this.#itemValorUnidade}
    set itemValorUnidade(value){ this.#itemValorUnidade = value};

    get itemQuantidade(){return this.#itemQuantidade}
    set itemQuantidade(value){ this.#itemQuantidade = value};

    get itemValorTotal(){return this.#itemValorTotal}
    set itemValorTotal(value){ this.#itemValorTotal = value};


    constructor(id, pedidoId, produtoId, quantidade, ItemValorUnidade, valorTotal){
        this.#itemId = id;
        this.#pedidoId = pedidoId;
        this.#produtoId = produtoId;
        this.#itemQuantidade = quantidade;
        this.#itemValorTotal = valorTotal;
        this.#itemValorUnidade = ItemValorUnidade;
    }

    async gravar(){
        let sql = "insert into tb_pedidoitens (ped_id, prd_id, pit_quantidade, pit_valorunidade, pit_valortotal) values (?,?,?,?,?)";

        let valores = [this.#pedidoId, this.#produtoId, this.#itemQuantidade, this.#itemValorUnidade, this.#itemValorTotal];

        let banco = new Database();

        let result = await banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }
}
module.exports = pedidoItemModel;