cid.controller('romaCTRL', function($scope, serviceTotal){
    $scope.mgs = '21 de abril de 753 a.C.';
    $scope.imgRoma = [];

    serviceTotal.serviceTotal().then(function(responde){
        $scope.imgRoma = responde.data.imgRoma;
    });
});