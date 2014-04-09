angular.module('johnsMusicPage')
.directive('menuDropdownItem', [
  function () {

  var menuDropdownItem = {
    restrict: 'E',
    require: '^menuDropdown',
    scope: {
      href: "@",
      text: "@"
    },
    link: function (scope, element, attrs, controller) {

      controller.addItem({ 
        href: scope.href,
        text: scope.text
      });

    }
  };

  return menuDropdownItem;
}]);
