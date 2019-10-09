cid.service('infosMenu', function($http){
    let _infoMenu = function(){
        return $http({
            method: "GET",
            url: './App/JS/infoMenu.json'
        })
    };
    return{
        infoMenu:   _infoMenu
    }
})