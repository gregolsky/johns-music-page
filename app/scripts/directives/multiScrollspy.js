angular.module('johnsMusicPage')
    .directive('multiScrollspy', [
        '$rootScope',
        '$window',
        '$document',
        function ($rootScope, $window, $document) {
            'use strict';

            var _ = $window._;

            var multiScrollspy = {
                restrict: 'A',
                link: function (scope, element, attrs) {

                    var subelements = [];

                    var getClientHeight = function () {
                        return $window.innerHeight || $window.document.documentElement.clientHeight;
                    };

                    var isElementInViewport = function (el) {
                        var rect = el.getBoundingClientRect();
                        var height = getClientHeight();
                        var isTooHigh = rect.top < 0 && rect.bottom < 0;
                        var isTooLow = rect.top > height && rect.bottom > height;
                        return !isTooHigh && !isTooLow;
                    };

                    $document.on('scroll', function () {

                        subelements = $window.document.querySelectorAll(attrs.multiScrollspy);

                        if (_.some(subelements, isElementInViewport)) {
                            element.addClass('active');
                        } else {
                            element.removeClass('active');
                        }

                    });

                }
            };

            return multiScrollspy;
        }]);
