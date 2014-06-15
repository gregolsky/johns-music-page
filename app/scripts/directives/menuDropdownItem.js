angular.module('johnsMusicPage')
.directive('menuDropdownItem', [
  function () {

  var menuDropdownItem = {
    restrict: 'E',
    require: '^menuDropdown',
    scope: {
      href: "@",
      text: "@",
      onClick: "&"
    },
    link: function (scope, element, attrs, controller) {

      controller.addItem({ 
        href: scope.href,
        text: scope.text,
        onClick: scope.onClick
      });

    }
  };

  return menuDropdownItem;
}]);
