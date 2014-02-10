'use strict';

angular.module('johnsMusicPage')
    .controller('MainController', [
                    '$scope',
                    '$location',
        function ($scope, $location) {

            $scope.showCarousel = function () {
                return $location.path() == '/';
            }

  }]);