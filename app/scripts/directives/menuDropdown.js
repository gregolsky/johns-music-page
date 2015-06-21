angular.module('johnsMusicPage')
    .directive('menuDropdown', [
  function () {
            'use strict';

            var menuDropdown = {
                restrict: 'E',
                templateUrl: 'views/templates/menuDropdown.html',
                transclude: true,
                replace: true,
                scope: {
                    icon: '@',
                    text: '@'
                },
                controller: 'MenuDropdownController'
            };

            return menuDropdown;
  }]);