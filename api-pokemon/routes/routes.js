module.exports = function (app) {

    app.get('/', function (req,res) {

        var conn = app.infra.connectionFactory();
        var pokemonDao = new app.infra.PokemonDao(conn);

        pokemonDao.lista(function (err, resultado) {
            if (err) err.send();
            else res.json(resultado)
        })
    })

    app.get('/pokemon/', function(req,res){

        var conn = app.infra.connectionFactory();
        var pokemonDao = new app.infra.PokemonDao(conn);

        var id = req.query.pokemon_id;
        console.log(id);
        

        pokemonDao.buscaPorId(id, function(err, resultado){
            if (err) console.log(err);
            else res.json(resultado);
        })
    })
}