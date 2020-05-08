cid.controller('menuCTRL', function($scope, serviceTotal){
    $scope.title = 'Cidades ao redor do Mundo';
    $scope.asCidades = [];

    serviceTotal.serviceTotal().then(function(response){
        $scope.asCidades = response.data.info
    })
});