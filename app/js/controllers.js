'use strict';

/* Controllers */

var app = angular.module('gameApp.controllers', []);

app.service('player', function Player() {
    var  player = this;
    player.choice = 'Default';
  })

app.controller('IndexCtrl', ['$scope', '$routeParams', '$location', '$http', 'player', function ($scope, $routeParams, $location, $http, player) {

	var index = this;
    index.player = player; 

    $scope.choices = [
	    {
	    	id: 'rock',
	    	title : 'rock'
	    },
	    {
	    	id: 'scissors',
	    	title : 'scissors'
    	},
    	{
	    	id: 'paper',
	    	title : 'paper'
    	},
    ];

    $scope.choose = function (id) {   
     
       index.player.choice = id;  
       $location.path('/game');  
    };     

}]);

app.controller('GameCtrl', ['$scope', '$routeParams', '$location', '$http', 'player', function ($scope, $routeParams, $location, $http, player) {
	var game = this;

	game.player = player;

	console.log(game.player.choice);
  

}]);
