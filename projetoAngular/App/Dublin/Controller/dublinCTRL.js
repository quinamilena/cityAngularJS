cid.controller('dublinCTRL', function($scope, serviceTotal){
    $scope.mgs = 'Por volta de 5500 a.C.';
    $scope.imgDublin = [];

    serviceTotal.serviceTotal().then(function(response){
        $scope.imgDublin = response.data.imgDublin
    });
    
});