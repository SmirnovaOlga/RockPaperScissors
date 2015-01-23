'use strict';

/* Controllers */

var app = angular.module('gameApp.controllers', []);
app.controller('IndexCtrl', ['$scope', '$routeParams', '$location', '$http', function ($scope, $routeParams, $location, $http) {
   
    $scope.choice = '';
   

    $scope.choose = function ($event) {   
        $scope.choice = angular.element($event.currentTarget)[0].id;   
        $location.path('/game');     
        console.log($scope.choice);
    };   
  

}]);
