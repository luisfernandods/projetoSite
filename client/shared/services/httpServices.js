angular.module('personal')
    .service('servicoUsuario', ['$http', function ($http) {
        return {
            cadastrar: function (usuario) {
                return $http.post('/usuario/cadastrar', usuario);
            },
            listar: function () {
                return $http.get('/usuario/listar');
            }
        };
    }]);