angular.module('johnsMusicPage')
    .directive('multiScrollspy', [
        '$rootScope',
        function ($rootScope) {
            var multiScrollspy = {
                restrict: 'A',
                link: function (scope, element, attrs) {

                    var subelements = [];
                    
                    var getClientHeight = function () {
                        return window.innerHeight || document.documentElement.clientHeight;   
                    };
                    
                    var isElementInViewport = function(el) {
                        var rect = el.getBoundingClientRect();
                        var height = getClientHeight();
                        var isTooHigh = rect.top < 0 && rect.bottom < 0;
                        var isTooLow = rect.top > height && rect.bottom > height;
                        var partIsOnTheScreen = rect.top >= 0 || rect.bottom <= height;
                        return !isTooHigh && !isTooLow;
                    }
                    
                    $rootScope.$on('$duScrollChanged', function ($event, scrollY) {
                        
                        subelements = document.querySelectorAll(attrs.multiScrollspy);
                        
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