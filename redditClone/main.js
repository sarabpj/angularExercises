var app = angular.module("redditApp", [])
// var moment = require('moment');
// var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// moment().format();

app.controller('firstController', function($scope){
  $scope.view={};
  $scope.posts=[{title:"Lovely", author:"Sara", 
                  image:"http://lorempixel.com/150/150/", 
                  votes: 10,
                  description:"Turn that frown upside down", 
                  postTime:"  Last Monday at 2:30 AM", 
                  comments:[{author:"emily", body:"that's so cool"}]}, 
                  {title:"Sweet", author:"Sara", 
                  image:"http://lorempixel.com/150/150/",
                  votes: 13, 
                  description:"Candy", 
                  postTime:"Yesterday at 2:30 AM", 
                  comments:[{author:"sheena", body:"that's so cool"}]} ];

})