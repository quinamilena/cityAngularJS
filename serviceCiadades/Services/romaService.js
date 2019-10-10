cid.service('romaService', function($http){
    let _imgRoma = function(){
        return $http({
            method: 'GET',
            url: './App/JS/infoMenu.json'
        })
    };
    return {
        imgRoma     :_imgRoma
    }
});