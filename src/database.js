const mysql = require('mysql');
const {promisify} = require('util');
const{database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection)=>{
    if(err){
        if(err.code == 'PROTOCOL_CONNECTION_LOST'){
            console.error('LA BASE DE DATOS FUE CERRADA');
        }
        if(err.code == 'ER_COUNT_ERROR'){
            console.error("LA base de datos tiene demasiadas conexiones");
        }
        if(err.code == 'ECONNREFUSED'){
            console.error("La base de datos fue rechazada");
        }
    }
    if (connection) connection.release();
    console.log("Se conectó a la base de datos");
    return;
});
promisify(pool.query);
module.exports = pool;