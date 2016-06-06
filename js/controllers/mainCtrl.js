angular.module('app').controller('mainCtrl', function($scope, usersService){
  $scope.updateLoggedInUser = function(){
    $scope.loggedInUser = usersService.getLoggedInUser();
  }
  $scope.fillUsers = usersService.fillUsers;
  $scope.getUsersMinusSelf = function(){
    $scope.usersMinusSelf = usersService.getUsersMinusSelf();
  }
  $scope.changeView = usersService.changeView;
})
