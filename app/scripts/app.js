'use strict';

angular.module('johnsMusicPage', [ 'ngRoute',  'ui.bootstrap' ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'MainCtrl'
      })
      .when('/education/workshops', {
        templateUrl: 'views/education/workshops/view.html'
      })
      .when('/education/classes', {
        templateUrl: 'views/home/view.html'
      })    
      .when('/education/classes', {
        templateUrl: 'views/home/view.html'
      })    
      .when('/media', {
        templateUrl: 'views/home/view.html'
      })    
      .when('/contact/classes', {
        templateUrl: 'views/home/view.html'
      })    
      .when('/services/business', {
        templateUrl: 'views/home/view.html'
      }) 
      .when('/services/concert', {
        templateUrl: 'views/home/view.html'
      })   
      .when('/services/event', {
        templateUrl: 'views/home/view.html'
      })    
      .when('/about', {
        templateUrl: 'views/home/view.html'
      })       
      .otherwise({
        redirectTo: '/'
      });
  });
