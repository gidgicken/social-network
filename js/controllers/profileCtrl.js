angular.module('app').controller('profileCtrl', function($scope, $stateParams, $q, usersService){
  $scope.updateSelectedFriend = function(){
    $scope.selectedFriend = usersService.getSelectedFriend($stateParams.id);
  }
  $scope.addFriend = function(){
    if($scope.selectedFriend.name === "Brian Scalabrine"){
      var deferred = $q.defer();
      setTimeout(function(){
      deferred.resolve(window.location = ('../../InfiniteRunner/index.html'))
    }, 500);
      return deferred.promise;
    }else if($scope.selectedFriend.name === "He-Man"){
      var deferred = $q.defer();
      setTimeout(function(){
      deferred.resolve(window.location = ('https://www.youtube.com/watch?v=ZZ5LpwO-An4'));
    }, 500);
      return deferred.promise;
    }else{
      var userListToUpdate = JSON.parse(localStorage.getItem('localStoreUsers'));
      $scope.loggedInUser.friends.push($scope.selectedFriend._id);
      $scope.selectedFriend.friends.push($scope.loggedInUser._id);
      for(var i = 0; i < userListToUpdate.length; i++){
        if(userListToUpdate[i]._id === $scope.loggedInUser._id){
          userListToUpdate[i] = $scope.loggedInUser;
        }else if(userListToUpdate[i]._id === $scope.selectedFriend._id){
          userListToUpdate[i] = $scope.selectedFriend;
        }
      }
      localStorage.setItem('localStoreUsers', JSON.stringify(userListToUpdate));
      localStorage.setItem('loggedInUser', JSON.stringify($scope.loggedInUser));
    }
  };
  $scope.isCurrentFriend = usersService.isCurrentFriend;

  // $('document').ready(function(){
    // if(usersService.isCurrentFriend($scope.selectedFriend._id)){
    //   $('#add-friend-button').css('display', 'none');
    // }
  // })
})
