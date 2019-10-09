cid.controller('dublinCTRL', function($scope, dublinService){
    $scope.mgs = 'Por volta de 5500 a.C.';
    $scope.imgDublin = [];

    dublinService.imgDublin().then(function(response){
        $scope.imgDublin = response.data.imgDublin
    });
});