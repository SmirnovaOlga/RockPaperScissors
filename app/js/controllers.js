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
        var oldTasks = $scope.tasks;
        $scope.tasks = [];

        angular.forEach(oldTasks, function(task) {
            if (!task.done)
            {
                $scope.tasks.push(task);
                if ($scope.count > 0)
                    $scope.count--;
            } 
        });
        
    };    

}]);
