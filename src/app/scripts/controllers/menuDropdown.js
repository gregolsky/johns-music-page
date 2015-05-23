    angular.module('johnsMusicPage')
        .controller('MenuDropdownController', [
    '$scope',
    '$document',
    '$window',
    '$timeout',
   function ($scope, $document, $window, $timeout) {
                'use strict';

                var _ = $window._;

                $scope.items = [];

                $scope.status = {
                    open: false,
                    toggling: false
                };

                $scope.toggle = function ($event, value) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.status.open = value;
                };

                $scope.itemsSelector = function () {
                    var hrefs = _.map($scope.items, function (item) {
                        return item.href;
                    });

                    return hrefs.join();
                };

                $scope.gotoFirstItem = function () {
                    if ($scope.items.length === 0) {
                        return;
                    }

                    var sel = $scope.items[0].href;
                    $document.scrollToElement(angular.element($window.document.querySelector(sel)), 110, 1000);
                };

                this.addItem = function (item) {
                    $scope.items.push(item);
                };

   }]);
