cid.controller('menuCTRL', function($scope, infosMenu){
    $scope.title = 'Cidades ao redor do Mundo';
    $scope.asCidades = [];

    infosMenu.infoMenu().then(function(response){
        $scope.asCidades = response.data.info
    })
});