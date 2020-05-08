cid.controller("atenasCTRL", function($scope, serviceTotal){
    $scope.mgs = '508 a.C.';
    $scope.imgAtenas =[];

    serviceTotal.serviceTotal().then(function(response){
        $scope.imgAtenas = response.data.imgAtenas;
    });
});