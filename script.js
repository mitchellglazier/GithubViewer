(function() {
  
  var app = angular.module("githubViewer", []);
  
  var MainCtrl = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
    };

    var onError = function(reason) {
      $scope.error = "Could not find the user";
    };

    $http.get("https://api.github.com/users/mitchellglazier")
      .then(onUserComplete);

    $scope.message = "DevPoint Coders!"

  };
  
  app.controller("MainCtrl", MainCtrl);

}());