var app = angular.module('ContactApp', []);

app.controller('ContactControl', function($scope){
  $scope.view= {};
  $scope.contacts =[{name:'John', email:'john@gmail.com', phone:'555-1276'},
                    {name:'Mary', email:'mary@gmail.com', phone:'800-BIG-MARY'},
                    {name:'Mike', email:'mike@gmail.com',phone:'555-4321'},
                    {name:'Adam', email:'adam@gmail.com',phone:'555-5678'},
                    {name:'Julie', email:'julie@gmail.com',phone:'555-8765'},
                    {name:'Juliette',email:'juliette@gmail.com', phone:'555-5678'}]
  
  $scope.submit = function () {
      $scope.contacts.push({name: $scope.view.name , email: $scope.view.email, phone: $scope.view.phone})


  }

})
