angular.module('app').controller('myfriendsCtrl', function($scope, usersService){
  $scope.updateFriendsList = function(){
    $scope.currentFriends = usersService.getCurrentFriends();
  }
})
