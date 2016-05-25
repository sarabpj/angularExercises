var app = angular.module("madLib", []);
app.controller("mainController", function($scope){
  $scope.reset = function(){
   $scope.word = {boyName: '',
                adj: '',
                pluarNoun: '',
                pluralNoun2: '',
                pluralInsect: '',
                pluralNoun3: '',
                pluralVerb: ''
                };

  $scope.isShow = false;

  }
  $scope.reset();
});
