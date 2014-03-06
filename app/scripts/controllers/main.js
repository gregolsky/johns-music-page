'use strict';

angular.module('johnsMusicPage')
    .controller('MainController', [
                    '$scope',
                    '$location',
                    '$rootScope',
        function ($scope, $location, $rootScope) {

            $scope.showCarousel = function () {
                return $location.path() == '/';
            };

            

  }]);