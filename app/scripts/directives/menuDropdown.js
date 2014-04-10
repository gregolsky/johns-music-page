angular.module('johnsMusicPage')
.directive('menuDropdown', [
  'scroller',
  function (scroller) {

  var menuDropdown = {
    restrict: 'E',
    templateUrl: 'views/templates/menuDropdown.html',
    transclude: true,
    replace: true,
    scope: {
      icon: "@",
      text: "@"
    },
    controller: function($scope) {

      $scope.items = [];

      $scope.open = false;

      $scope.toggle = function (value) {
        $scope.open = value;
      };

      $scope.itemsSelector = function () {
        var hrefs = _.map($scope.items, function (item) {
            return item.href
          });

        return hrefs.join();
      };

      $scope.gotoFirstItem = function () {
        if ($scope.items.length == 0) {
          return;
        }

        var sel = $scope.items[0].href;
        scroller.scrollToElement(document.querySelector(sel), 110, 1000);
      };

      this.addItem = function (item) {
        $scope.items.push(item);
      };

    }
  };

  return menuDropdown;
}]);
