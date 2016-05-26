var app = angular.module("redditApp", [])
var m = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");


app.controller('firstController', function($scope){
  $scope.view={};
  $scope.posts=[{title:"Lovely", 
                  author:"Sara", 
                  image:"http://lorempixel.com/150/150/", 
                  votes: 10,
                  description:"Turn that frown upside down", 
                  postTime: m, 
                  comments:[{author:"emily", text:"that's so cool"}]}, 
                  {title:"Sweet", author:"Sara", 
                  image:"http://lorempixel.com/150/150/",
                  votes: 13, 
                  description:"Candy", 
                  postTime:m, 
                  comments:[{author:"sheena", text:"that's so cool"}]} ];

  $scope.noPost= false;


  $scope.submitPost = function () {
      $scope.posts.push({
        title: $scope.view.title,
        author: $scope.view.author, 
        image: $scope.view.image, 
        votes: 0,
        description: $scope.view.description,
        postTime: m,
        comments: []
        })
      $scope.view.title = ""
      $scope.view.author = ""
      $scope.view.image= ""
      $scope.view.description = ""
      $scope.noPost = false;
  }

  $scope.increment = function(post) {
        post.votes += 1;
   };

  $scope.decrement = function(post) {
        post.votes -= 1;
   };

  window.scope = $scope;
  $scope.sort = "votes";
      // $scope.reverse = false;
      $scope.changeSort = function(value){
          if ($scope.sort == value){
            // $scope.reverse = !$scope.reverse;
            return;
          }
          $scope.sort = value;
          // $scope.reverse = false;
      }


  $scope.submitComment = function (post) {
      post.comments.push({
        author: $scope.view.author,
        text: $scope.view.text
        })
      $scope.view.author = ""
      $scope.view.text = ""
      post.addComment=false;
  }
})