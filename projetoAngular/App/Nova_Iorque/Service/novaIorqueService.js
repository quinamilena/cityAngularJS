cid.service('novaIorqueService', function($http){
    let _imgNovaIorque = function(){
        return $http({
            method: 'GET',
            url: './App/JS/infoMenu.json'
        })
    };
    return {
        imgNovaIorque:  _imgNovaIorque
    }
});