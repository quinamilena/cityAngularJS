cid.service('infosMenu', function($http){
    let _infoMenu = function(){
        return $http({
            method: "GET",
            url: './App/JS/infoMenu.json' //Pegando as info's do meu arquivo json;
        })
    };
    return{
        infoMenu:   _infoMenu
    }
})