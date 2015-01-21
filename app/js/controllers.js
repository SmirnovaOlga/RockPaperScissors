'use strict';

/* Controllers */

var app = angular.module('toDoList.controllers', []);
app.controller('IndexCtrl', ['$scope', '$routeParams', '$location', '$http', function ($scope, $routeParams, $location, $http) {
   
    $scope.tasks = [{"text" : "clean", "done" : false}];
    $scope.count = 1;

    $scope.addTask = function () {         
       $scope.tasks.push({"text" : $scope.newtask, "done" : false});
       $scope.count++;
    };    

    $scope.deleteTask = function () { 

        for (var i = 0; i <= $scope.tasks.length; i++) {
            console.log($scope.tasks[i].done);
            if ($scope.tasks[i].done == "true")          
             delete $scope.tasks[i];
        }

       if($scope.count > 0)
            $scope.count--;
    };    

}]);
