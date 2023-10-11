export  default class Movement{

    constructor(id, descricao, valor, movement_type, type){
            this.id = id;
            this.descricao = descricao;
            this.valor=valor;
            this.movement_type = movement_type;
            this.type = type;
            this.data =  new Date();
        }

 
}