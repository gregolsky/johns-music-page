angular.module('johnsMusicPage')
    .directive('multiScrollspy', [
        '$rootScope',
        function ($rootScope) {
            var multiScrollspy = {
                restrict: 'A',
                link: function (scope, element, attrs) {

                    var subelements = [];
                    
                    var isElementInViewport = function(el) {
                        var rect = el.getBoundingClientRect();

                        return (
                            rect.top >= 0 &&
                            rect.left >= 0 &&
                            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                        );
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