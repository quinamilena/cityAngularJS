cid.controller('romaCTRL', function($scope, romaService){
    $scope.mgs = '21 de abril de 753 a.C.';
    $scope.imgRoma = [];

    romaService.imgRoma().then(function(responde){
        $scope.imgRoma = responde.data.imgRoma;
    });
});