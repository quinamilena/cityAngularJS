cid.controller('saoPauloCTRL', function($scope, serviceTotal){
    $scope.mgs = '25 de janeiro de 1554.'
    $scope.imgSaoPaulo = [];

    serviceTotal.serviceTotal().then(function(response){
        $scope.imgSaoPaulo = response.data.imgSaoPaulo;
    });
});