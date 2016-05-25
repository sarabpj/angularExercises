var app = angular.module('mouseEnter', [])
app.controller('firstController', function($scope){
    $scope.view = {};
    $scope.view.enterCount = 0;
    $scope.randomColor = function(){
      var x = Math.round(0xffffff * Math.random()).toString(16);
      var y = (6-x.length);
      var z = "000000";
      var z1 = z.substring(0,y);
      var color = "#" + z1 + x;
      return color
                  }
})