angular.module('johnsMusicPage')
    .directive('sectionHeader', [
    function () {
            'use strict';

            var sectionHeader = {
                restrict: 'E',
                replace: true,
                transclude: false,
                templateUrl: 'views/templates/sectionHeader.html',
                scope: {
                    text: '@',
                    sub: '@',
                    icon: '@'
                }
            };

            return sectionHeader;
  }]);