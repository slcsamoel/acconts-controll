import { User } from '../models/user.model';
import DatabaseConnection from '../database/database-connection';

const table = 'user';
const db = DatabaseConnection.getConnection();
export default class UserService {

       static addData(param) {
            return new Promise((resolve, reject) => {
                db.transaction(tx => {
                    tx.executeSql(
                        `insert into ${table} (nome,saldo) values (? , ?);`,
                        [param.nome,param.saldo],
                        (transact, resultset) => {
                            console.log(resultset);
                            resolve(resultset.insertId);
                        },
                        (transact,sqlError) => {
                            console.log(sqlError);
                            reject(new Error('Erro ao executar o insert SQL'));
                        }
                    );
                },
                (txError) => {
                    console.log(txError);
                    reject(new Error('Erro na transação do banco de dados'));
                });
            });

        }

        static updateById(param) {
            return new Promise((resolve, reject) => {
                db.transaction(tx => {
                    tx.executeSql(
                        `update ${table} set nome = ? where id = ?;`,
                        [param.nome, param.id],
                        (_, { rowsAffected }) => {
                            if (rowsAffected > 0) {
                                resolve('Atualização bem-sucedida');
                            } else {
                                reject(new Error('Nenhum registro atualizado'));
                            }
                        },
                        (sqlError) => {
                            console.log(sqlError);
                            reject(new Error('Erro ao executar a consulta SQL'));
                        }
                    );
                },
                (txError) => {
                    console.log(txError);
                    reject(new Error('Erro na transação do banco de dados'));
                });
            });
        }

        static findById(id) {
            return new Promise((resolve, reject) => {
                db.transaction(tx => {
                    tx.executeSql(
                        `select * from ${table} where id=?`,
                        [id],
                        (transact,{rows}) => {
                            console.log(rows);
                            resolve(rows._array);
                        },
                        (transact,sqlError) => {
                            console.log(sqlError);
                            reject(new Error('Erro ao executar a consulta SQL'));
                        }
                    );
                },
                (txError) => {
                    console.log(txError);
                    reject(new Error('Erro na transação do banco de dados'));
                });
            });
        }

}

