var app = angular.module('pingPong', [])

app.controller('scoreController', function($scope){
  //figure out how to limit to 11
  window.scope = $scope;
  //
  $scope.reset= function (){
   $scope.teams =[
    {name: "PLAYER 1", score:0, serve:!sup},
    {name: "PLAYER 2", score:0, serve:sup},
   ]

   // create a function which listen

  $scope.score = function(team) {
        team.score += 1;
        // fucntion that checks the count aka score
        if(superTotal % 2 === 0)(whoseServe())
        if(team.score > 12){ $scope.reset();}
        
    };

  var superTotal =0;
  var sup = false;

  function whoseServe(){
     superTotal++;
  if(superTotal % 2 ===0){ sup = !sup}
     console.log(superTotal)
     console.log(sup)
  }

  }

  $scope.reset();
 
})