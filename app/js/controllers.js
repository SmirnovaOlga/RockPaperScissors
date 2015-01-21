'use strict';

/* Controllers */

var app = angular.module('toDoList.controllers', []);
app.controller('IndexCtrl', ['$scope', '$routeParams', '$location', '$http', function ($scope, $routeParams, $location, $http) {
  

    $scope.addTask = function () { 

       $(".tasks-list").append("<div class='checkbox'><label><input ng-change='myStyle={'text-decoration': 'line-through'}' ng-model='done'  type='checkbox'><p ng-style='myStyle'>" + $scope.task + "</p></label></div>");

    };    

}]);
