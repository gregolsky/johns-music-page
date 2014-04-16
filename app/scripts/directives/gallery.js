angular.module('johnsMusicPage')
    .directive('gallery', [
        function () {
            'use strict';

            var gallery = {
                restrict: 'E',
                templateUrl: 'views/templates/gallery.html',
                transclude: false,
                replace: false,
                scope: {
                    pictures: '=',
                    interval: '='
                },
                link: function link(scope, iElement, iAttrs) {
                    
                    scope.$watch('pictures', function (oldVal, newVal) {
                        scope.selectedIndex = 0;
                    });

                    scope.select = function (picture, index) {
                        scope.selectedIndex = index;
                    };
                    
                    scope.selected = function () {
                        return scope.pictures[ scope.selectedIndex || 0 ];
                    };
                    
                    scope.next = function () {
                        scope.selectedIndex = (scope.selectedIndex + 1) % scope.pictures.length;
                    };
                }
            };

            return gallery;
    }]);
