angular.module('app').controller('loginCtrl', function($scope, usersService){
  $scope.viewAfterLoginTry = 'myprofile';
  $scope.logIn = function(fullName){
    usersService.tryLogin(fullName);
    $scope.viewAfterLoginTry = usersService.getView();
  }
  // $scope.updateView = function(){
  //   $scope.viewAfterLoginTry = usersService.updateView();
  // }
})
