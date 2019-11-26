function PagamentoDao(connection) {
    this._connection = connection;
}

PagamentoDao.prototype.lista = function(callback) {
    this._connection.query('SELECT * FROM pokemon',callback);
}

module.exports = function(){
    return PagamentoDao;
};
