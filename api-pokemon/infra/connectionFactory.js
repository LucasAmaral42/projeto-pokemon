const sql = require('mssql');
 
var dbConfig = {
    server: "localhost",
    database: "ProjetoRedFox",
    user: "lucas",
    password: "123",
    port: 1433
};

function createDBConnection() {
    var conn = new sql.ConnectionPool(dbConfig);
    var req = new sql.Request(conn);

    return conn;
}


module.exports = function() {
    return createDBConnection;
}