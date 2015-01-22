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

    $scope.deletecompletedTask = function () {   
        angular.forEach($scope.tasks, function(task) {
            if (task.done && $scope.count > 0)
            {
                $scope.tasks.splice($scope.tasks.indexOf(task), 1);              
                    $scope.count--;
            } 
        });
        
    };    

}]);
