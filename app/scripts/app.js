'use strict';

angular.module('johnsMusicPage', [ 'ngRoute',  'ui.bootstrap', 'ui.bootstrap.dropdownToggle', 'duScroll' ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainController'
      })      
      .otherwise({
        redirectTo: '/'
      });
  })
  .value('duScrollDuration', 1000);
