angular.module('johnsMusicPage')
    .directive('highlight', [
    function () {
            'use strict';

            var highlight = {
                restrict: 'E',
                transclude: true,
                replace: true,
                templateUrl: 'views/templates/highlight.html'
            };

            return highlight;
  }]);