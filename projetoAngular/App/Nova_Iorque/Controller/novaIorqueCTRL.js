cid.controller('novaIorqueCTRL', function($scope, serviceTotal){
    $scope.mgs = '9 de julho de 1776.'
    $scope.imgNovaIorque = [];

    serviceTotal.serviceTotal().then(function(response){
        $scope.imgNovaIorque = response.data.imgNovaIorque;
    });
});