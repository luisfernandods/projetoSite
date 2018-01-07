var usuarioController = require('../controllers/usuario'),
    config = require('../config/config');

module.exports = function (app) {

    app.route(config.CADASTRAR_USUARIO_URL)
        .post(usuarioController.cadastrar);

    app.route(config.LISTAR_USUARIOS_URL)
        .get(usuarioController.listar);

};