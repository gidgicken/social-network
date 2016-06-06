angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('register', {
        url: '/',
        templateUrl: 'views/registration.html',
        controller: 'registerCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .state('myprofile', {
        url: '/myprofile',
        templateUrl: 'views/myprofile.html',
        controller: 'myprofileCtrl'
      })
      .state('myfriends', {
        url: '/myfriends',
        templateUrl: "views/myfriends.html",
        controller: 'myfriendsCtrl'
      })
      .state('findfriends', {
        url: '/findfriends',
        templateUrl: "views/findfriends.html",
        controller: 'findfriendsCtrl'
      })
      .state('update-info', {
        url: '/update-info',
        templateUrl: "views/update-info.html",
        controller: 'updateinfoCtrl'
      })
      .state('profile', {
        url: '/profile/:id',
        templateUrl: "views/profile.html",
        controller: 'profileCtrl'
      })
  });
