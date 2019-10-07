var cid = angular.module('city', ['ui.router']);

cid.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('atenas', {
		url: "/cidade-de-atenas",
		templateUrl: "./App/Atenas/View/atenas.html" ,
		controller: "atenasCTRL"
    });
    
    $stateProvider.state('buscaCidade', {
        url: '/conheca-cidades-do-brasil',
        templateUrl: './App/buscaBrasil/View/buscaBrasil.html',
        controller: 'buscaBrasilCTRL'
    });

    $stateProvider.state('dublin', {
        url: '/cidade-de-dublin',
        templateUrl: './App/Dublin/View/dublin.html',
        controller: 'dublinCTRL'
    });

    $stateProvider.state('menu', {
        url: '/',
        templateUrl: './App/Menu/View/menu.html',
        controller: 'menuCTRL'
    })

    $stateProvider.state('novaIorque', {
        url: '/cidade-de-nova-iorque',
        templateUrl: './App/Nova_Iorque/View/novaIorque.html',
        controller: 'novaIorqueCTRL'
    });

    $stateProvider.state('roma', {
        url: '/cidade-de-roma',
        templateUrl: './App/Roma/View/roma.html',
        controller: 'romaCTRL'
    });

    $stateProvider.state('saoPaulo', {
        url: '/cidade-de-sao-paulo',
        templateUrl: './App/São_Paulo/View/saoPaulo.html',
        controller: 'saoPauloCTRL'
    });

    $urlRouterProvider.otherwise('/');

});