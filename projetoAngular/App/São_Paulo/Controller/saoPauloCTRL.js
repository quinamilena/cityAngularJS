cid.controller('saoPauloCTRL', function($scope, saoPauloService){
    $scope.mgs = '25 de janeiro de 1554.'
    $scope.imgSaoPaulo = [];

    saoPauloService.imgSaoPaulo().then(function(response){
        $scope.imgSaoPaulo = response.data.imgSaoPaulo;
    });
});