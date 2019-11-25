const sql = require('mssql');

function PokemonDao(connection){
    this._connection = connection;
    req = new sql.Request(this._connection);
}

PokemonDao.prototype.lista = function(callback){
    this._connection.connect(function(err) {
        if(err) console.log(err);

        this.req.query('SELECT * FROM dbo.Pokemon', callback)
    })
}

module.exports = function() {
    return PokemonDao;
}