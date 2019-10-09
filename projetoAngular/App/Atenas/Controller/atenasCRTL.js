cid.controller("atenasCTRL", function($scope, atenasServices){
    $scope.mgs = '508 a.C.';
    $scope.imgAtenas =[];

    atenasServices.imgAtenas().then(function(response){
        $scope.imgAtenas = response.data.imgAtenas;
    });
});