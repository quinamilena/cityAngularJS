cid.controller('buscaBrasilCTRL',function($scope, buscaCity){
    $scope.estado = []; //Novo array para guardar as info's que virão da state.data da requesição;
    $scope.valorSelecionado = null; // O ng-model do select passar como parametro da api de municipios;
    $scope.cidade = []; // Array para passar as cidades dos estados;
    $scope.citySelected = null; // Nomes dos estados, selecionados;

    buscaCity.selectCity().then(function(state){ // O selectCity é o nome do returno da função feita na service, fazer fora de uma função para executar ao abrir a pániga;
        $scope.estado = state.data; // Passando para o array de estados;
    });

    $scope.changeSelect = () => { // O change para o select;
        if ($scope.valorSelecionado){ // O if para verificar se o valor é vazio; 

            buscaCity.selectCityById($scope.valorSelecionado).then((response)=>{ //Passando o service, o nome da funçaõ do serviço(seus parametros),quando;
                $scope.cidade = response.data // O response é a reposta que obtive da api;

                buscaCity.selectNameCityById($scope.valorSelecionado).then((resp)=>{ //Passando com parametro, o id do estado, para poder pegar o nome do mesmo, em uma nova requisição;
                    $scope.citySelected = resp.data.nome;
                });

            });

        }
    };
});