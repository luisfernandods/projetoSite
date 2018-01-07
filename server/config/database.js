var mongoose = require('mongoose');

module.exports = function (uri) {

    mongoose.connect('mongodb://' + uri)
        .then(function () {
            console.log('Conectado ao db.');
        })
        .catch(function (error) {
            console.log('Erro ao conectar com o db ' + error.message);
        });


    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Conexão fechada pelo termino da aplicação');
            process.exit(0);
        });
    });

};