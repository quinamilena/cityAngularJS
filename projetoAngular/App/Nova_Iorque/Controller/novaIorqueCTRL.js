cid.controller('novaIorqueCTRL', function($scope, novaIorqueService){
    $scope.mgs = '9 de julho de 1776.'
    $scope.imgNovaIorque = [];

    novaIorqueService.imgNovaIorque().then(function(response){
        $scope.imgNovaIorque = response.data.imgNovaIorque;
    });
});