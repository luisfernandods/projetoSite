angular.module('personal', []);
angular.module('personal')
    .controller('IndexController', function ($scope, servicoUsuario) {

        $scope.cadastrarUsuario = function () {
            return servicoUsuario.cadastrar({ nome: $scope.nome })
                .success(function () {
                    $scope.mensagemOK = "Usuario cadastrado com sucesso";
                    $scope.listar();
                })
                .error(function (error) {
                    console.log(error);
                });
        };


        $scope.listar = function () {
            return servicoUsuario.listar()
                .success(function (retorno) {
                    $scope.usuarios = retorno;
                })
                .error(function () {
                    console.log(error);
                });
        };

        $scope.listar();
    });