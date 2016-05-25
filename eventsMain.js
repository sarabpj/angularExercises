var app = angular.module("eventApp", []);
app.controller("ChildController", function($scope){
    $scope.view = {};
    $scope.reverse = function(){
      $scope.view.data = $scope.view.data.split("").reverse().join("");

    }
    window.scope = $scope;
})