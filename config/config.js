const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {

    }
}

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'p3plzcpnl503504.prod.phx3.secureserver.net',
    database: 'app-store',
    user: 'diegomr',
    password: 'segurito123',
});
connection.connect(function(error){
    if(error){
        console.log("hubo un error...")
        throw error;
    }else{
        console.log("Conexión exitosa...");
    }
});

module.exports = connection;