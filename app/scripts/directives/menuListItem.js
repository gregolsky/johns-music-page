angular.module('johnsMusicPage')
    .directive('menuListItem', [

        function () {

            return {
                restrict: 'E',
                require: '^menuItem',
                scope: {
                    href: "@",
                    text: "@"
                },
                link: function (scope, element, attrs, menuItemCtrl) {
                    menuItemCtrl.addListItem(scope);
                }
            };
    }]);