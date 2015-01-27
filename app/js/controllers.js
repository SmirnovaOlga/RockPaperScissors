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
	    	id: '1',
	    	title : 'rock'
	    },
	    {
	    	id: '2',
	    	title : 'scissors'
    	},
    	{
	    	id: '3',
	    	title : 'paper'
    	},
    ];

    $scope.choose = function (title) {   
     
       index.player.choice = title;  
       $location.path('/game');  
    };     

}]);

app.controller('GameCtrl', ['$scope', '$routeParams', '$location', '$http', 'player', function ($scope, $routeParams, $location, $http, player) {
	var game = this;

	game.player = player;	

	$scope.choicesArray= ['rock', 'scissors', 'paper'];

	game.computerChoice = $scope.choicesArray[getRandomInt(0, 2)];

	function getRandomInt(min, max) {

  		return Math.floor(Math.random() * (max - min + 1)) + min;
  	}

  	if ((game.player.choice  == 'rock' && game.computerChoice == "scissors") || (game.player.choice  == 'scissors' && game.computerChoice == "paper") || (game.player.choice  == 'paper' && game.computerChoice == "rock"))
  		game.result = "Player is winner!"
  	else if (game.player.choice  == game.computerChoice)
  		game.result = "Draw!"
  	else 
  		game.result = "Computer is winner!"
  	

}]);
