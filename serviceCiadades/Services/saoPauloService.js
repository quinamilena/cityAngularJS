cid.service('saoPauloService', function($http){
    let _imgSaoPaulo = function (){
        return $http({
            method: 'GET',
            url: './App/JS/infoMenu.json'
        })
    };
    return {
        imgSaoPaulo    :_imgSaoPaulo
    }
});