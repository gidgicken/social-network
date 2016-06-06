angular.module('app').controller('updateinfoCtrl', function($scope, usersService){
  $scope.updateInfo = usersService.updateInfo;
})
