angular.module('johnsMusicPage')
    .controller('MainController', [
                    '$scope',
                    '$location',
                    '$rootScope',
                    '$window',
        function ($scope, $location, $rootScope, $window) {
            'use strict';

            $scope.showCarousel = function () {
                return $location.path() === '/';
            };

            $scope.menuCollapsed = true;

            $scope.toggleMenu = function (v) {
                if ($window.innerWidth > 768) {
                    return;
                }

                v = (!arguments || !arguments.length) ? !$scope.menuCollapsed : v;
                $scope.menuCollapsed = v;
            };

  }]);