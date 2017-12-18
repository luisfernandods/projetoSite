module.exports = function (uri) {

    var mongoose = require('mongoose');

    mongoose.connect('mongodb://' + uri);

    mongoose.connection.on('connected', function () {
        console.log('conectado ao mongodb');
    });

    mongoose.connection.on('error', function (error) {
        console.log(error);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('desconectado do Mongodb');
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Conexão fechada pelo termino da aplicação');
            process.exit(0);
        });
    });

};