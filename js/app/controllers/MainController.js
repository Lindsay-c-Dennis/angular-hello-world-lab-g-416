function MainController($scope) {
  $scope.name = "Clarence McFarts";
  $scope.email = "constantfartblast@ymail.com";
  $scope.phone = "555-123-1234";
}

angular
  .module('app')
  .controller('MainController', MainController);