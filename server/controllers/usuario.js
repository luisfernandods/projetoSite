var modelUsuario = require('../models/daos/usuario');

module.exports = {

    cadastrarUsuario: function (req, res) {
        return modelUsuario.cadastrarUsuario();
    }

};