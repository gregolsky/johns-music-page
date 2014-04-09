angular.module('johnsMusicPage')
.directive('menuItem', [
  function () {

  var menuItem = {
    restrict: 'E',
    templateUrl: 'views/templates/menuItem.html',
    transclude: false,
    replace: true,
    scope: {
      href: "@",
      icon: "@",
      text: "@"
    },
    link: function link(scope, iElement, iAttrs) {

    }
  };

  return menuItem;
}]);
