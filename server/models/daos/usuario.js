var Usuario = require('../usuario');

module.exports = {

    cadastrar: function (nomeUsuario) {
        return Usuario.create({ nome: nomeUsuario });
    },

    listar: function () {
        return Usuario.find({});
    }

};