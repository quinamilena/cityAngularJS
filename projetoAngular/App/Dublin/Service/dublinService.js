cid.service('dublinService', function($http){
    let _imgDublin = function(){
        return $http({
            method: 'GET',
            url: './App/JS/infoMenu.json'
        })
    };
    return {
        imgDublin:  _imgDublin
    }
});