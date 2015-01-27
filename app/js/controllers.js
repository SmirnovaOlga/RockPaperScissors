'use strict';

/* Controllers */

var app = angular.module('gameApp.controllers', []);

app.service('player', function Player() {
    var  player = this;
    player.choice = 'Default';
  })

app.controller('IndexCtrl', ['$scope', '$routeParams', '$location', '$http', function ($scope, $routeParams, $location, $http, player) {
   
      var index = this;
      index.player = player;
      console.log(index.player);

    $scope.choose = function ($event) {       
       // index.player = angular.element($event.currentTarget)[0].id;   
        console.log(index.player);
       // $location.path('/game');  
    };     

}]);

app.controller('GameCtrl', ['$scope', '$routeParams', '$location', '$http', function ($scope, $routeParams, $location, $http, player) {
	var game = this;

	game.player = player;
  

}]);
