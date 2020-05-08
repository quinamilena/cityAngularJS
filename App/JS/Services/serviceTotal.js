cid.service('serviceTotal', function($http){
    let _serviceTotal = function(){
        return $http({
            method: "GET",
            url: './App/JS/infoApp.json'
        })
    };

    return{
        serviceTotal   :_serviceTotal
    }
});