'use strict';

angular.module('johnsMusicPage', ['ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'MainCtrl'
      })    
      .otherwise({
        redirectTo: '/'
      });
  });
