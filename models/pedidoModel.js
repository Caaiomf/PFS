const Database = require('../db/database');


class PedidoModel{

    #pedidoId;
    #pedidoData;
    #pedidoValorTotal;



    get pedidoId(){return this.#pedidoId;}
    set pedidoId(value) { this.#pedidoId = value;}

    get pedidoData(){return this.#pedidoData;}
    set pedidoData(value) { this.#pedidoData = value;}

    get pedidoValorTotal(){return this.#pedidoValorTotal;}
    set pedidoValorTotal(value) { this.#pedidoValorTotal = value;}

    constructor(id, data, valorTotal){
        this.#pedidoData = data;
        this.#pedidoId = id;
        this.#pedidoValorTotal = valorTotal;
    }

    async gravar(){
        let sql = "insert into tb_pedido (ped_data, ped_valortotal) values (?, ?)";
        let banco = new Database();
        let valores = [this.#pedidoData, this.#pedidoValorTotal];
        ExecutaComandoLastInserted(sql, valores);
        if(result){
            this.#pedidoId = result;
            return true;
        }
        return false;
        
    }

    }

module.exports = PedidoModel;