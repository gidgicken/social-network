angular.module('app').controller('findfriendsCtrl', function($scope, usersService){
  // $scope.loggedInUser = usersService.getLoggedInUser;
  $scope.usersMinusFriends = usersService.usersMinusFriends();
  $scope.test = "Jordan"; //this is a test. and the second test
})
