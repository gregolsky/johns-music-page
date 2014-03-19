'use strict';

angular.module('johnsMusicPage')
    .controller('MainController', [
                    '$scope',
                    '$location',
                    '$rootScope',
                    'scroller',
        function ($scope, $location, $rootScope, scroller) {

            $scope.showCarousel = function () {
                return $location.path() == '/';
            };

            $scope.menuCollapsed = true;

  }]);