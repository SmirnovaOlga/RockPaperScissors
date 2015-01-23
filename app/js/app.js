'use strict';


angular.module('gameApp', [
        'ngRoute',
        'gameApp.filters',
        'gameApp.services',
        'gameApp.directives',
        'gameApp.controllers'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/index.html', controller: 'IndexCtrl'});
        $routeProvider.when('/game', {templateUrl: 'partials/game.html', controller: 'IndexCtrl'});         
        $routeProvider.otherwise({redirectTo: '/'});
    }]);

