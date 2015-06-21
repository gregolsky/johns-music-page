angular.module('johnsMusicPage')
    .directive('menuItem', [
  function () {
            'use strict';

            var menuItem = {
                restrict: 'E',
                templateUrl: 'views/templates/menuItem.html',
                transclude: false,
                replace: true,
                scope: {
                    href: '@',
                    icon: '@',
                    text: '@',
                    onClick: '&'
                }
            };

            return menuItem;
}]);