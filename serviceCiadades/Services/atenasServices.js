cid.service('atenasServices', function($http){
    let _imgAtenas = function(){
        return $http({
            method: "GET",
            url: './App/JS/infoMenu.json'
        })
    };

    return{
        imgAtenas   :_imgAtenas
    }
});