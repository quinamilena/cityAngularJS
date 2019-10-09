cid.service('buscaCity', function($http){

    let _selectCity = function(){ // Esta são variais privadas
        return $http({
            method: "GET",
            url:"https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
        })
    };

    let _selectCityById = function(id){ // Pegando o valor do parametro passado do controller $scope;
        return $http({
            method: "GET",
            url:`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`
        })
    };

    let _selectNameCityById = function(id) {
        return $http({
            method: "GET",
            url:`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}`
        })
    }

    return {
        selectCity              : _selectCity, // Passando para variaveis publicas;
        selectCityById          :_selectCityById,
        selectNameCityById      :_selectNameCityById
        
    }
})