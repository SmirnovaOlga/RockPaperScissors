'use strict';


angular.module('toDoList', [
        'ngRoute',
        'toDoList.filters',
        'toDoList.services',
        'toDoList.directives',
        'toDoList.controllers'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/index.html', controller: 'IndexCtrl'});        
        $routeProvider.otherwise({redirectTo: '/'});
    }]);

