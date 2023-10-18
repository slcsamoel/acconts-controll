import  DatabaseConnection  from './database-connection'

var db = null

export default class DatabaseInit {

    constructor() {
        db = DatabaseConnection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        console.log('Foreign keys turned on')
        );
        this.InitDb()
    }
     InitDb() {
        var sql = [
            `DROP TABLE IF EXISTS user;`,
            `DROP TABLE IF EXISTS movements;`,
            `DROP TABLE IF EXISTS movement_type;`,

            `create table if not exists user (
            id integer primary key autoincrement,
            nome text,
            saldo int
            );`,

            `create table if not exists movement_type (
             id integer primary key autoincrement,
             descricao text
            );`,

            `create table if not exists movements (
            id integer primary key autoincrement,
            descricao text,
            valor  int,
            movement_type_id int,
            type int,
            data datetime,

            foreign key (movement_type_id) references movement_type (id)    

            );`,
            
            `insert into movement_type(descricao) values('Boleto');`,
            `insert into movement_type(descricao) values('Pix');`,
            `insert into movement_type(descricao) values('Fatura');`,
            `insert into movement_type(descricao) values('Compras');`
        ];

        db.transaction(
            tx => {
                for (var i = 0; i < sql.length; i++) {
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );
    }

}