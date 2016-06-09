var app = angular.module('pingPong', [])

app.controller('scoreController', function($scope){
  //figure out how to limit to 11
  window.scope = $scope;
  //
  $scope.reset= function (){
  $scope.view = {};

   $scope.teams =[
    {name: "PLAYER 1", score:0, serve: serve},
    {name: "PLAYER 2", score:0, serve: !serve},
   ]

   // create a function which listen

  $scope.score = function(team) {
        team.score += 1;
        // fucntion that checks the count aka score
        if(superTotal % 2 === 0)(whoseServe(team))
        if(team.score > 12){ $scope.reset()}
        
   };

  var superTotal =0;
  var serve = false;

  function whoseServe(team){
     superTotal = superTotal+ 2;
     team.serve = !team.serve
  }

  }

  $scope.reset();
 
})