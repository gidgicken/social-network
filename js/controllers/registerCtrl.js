angular.module('app').controller('registerCtrl', function($scope, usersService){
  $scope.addUser = usersService.addUser;
})
