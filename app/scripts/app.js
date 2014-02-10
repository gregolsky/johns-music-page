'use strict';

angular.module('johnsMusicPage', [ 'ngRoute',  'ui.bootstrap' ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'MainController'
      })
      .when('/education/workshops', {
        templateUrl: 'views/education/workshops/view.html'
      })
      .when('/education/classes', {
        templateUrl: 'views/education/classes/view.html'
      })    
      .when('/media', {
        templateUrl: 'views/media/view.html'
      })    
      .when('/contact', {
        templateUrl: 'views/contact/view.html'
      })    
      .when('/services/business', {
        templateUrl: 'views/services/business/view.html'
      }) 
      .when('/services/concert', {
        templateUrl: 'views/services/concert/view.html'
      })   
      .when('/services/event', {
        templateUrl: 'views/services/event/view.html'
      })    
      .when('/about', {
        templateUrl: 'views/about/view.html'
      })       
      .otherwise({
        redirectTo: '/'
      });
  });
