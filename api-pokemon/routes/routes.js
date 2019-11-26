module.exports = function (app) {

    app.get('/', function (req,res) {

        var conn = app.infra.connectionFactory();
        var pokemonDao = new app.infra.PokemonDao(conn);

        pokemonDao.lista(function (err, resultado) {
            if (err) err.send();
            else res.json(resultado)
        })
    })
}