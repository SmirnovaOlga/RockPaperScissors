'use strict';

/* Controllers */

var app = angular.module('gameApp.controllers', []);
app.controller('IndexCtrl', ['$scope', '$routeParams', '$location', '$http', function ($scope, $routeParams, $location, $http) {
   
   

    $scope.click = function () {         
       $location.path('/game');
       console.log(choice);
    };   
  

}]);

app.controller('GameCtrl', ['$scope', '$routeParams', '$location', '$http', function ($scope, $routeParams, $location, $http) { 
  

}]);