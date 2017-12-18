var usuarioController = require('../controllers/usuario');

module.exports = function (app) {

    app.route('/v1/usuario')
        .post(usuarioController.cadastrarUsuario);

};