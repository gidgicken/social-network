angular.module('app').controller('findfriendsCtrl', function($scope, usersService){
  // $scope.loggedInUser = usersService.getLoggedInUser;
  $scope.usersMinusFriends = usersService.usersMinusFriends();
})
