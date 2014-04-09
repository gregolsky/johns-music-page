angular.module('johnsMusicPage')
.directive('menuDropdown', [
  function () {

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

      $scope.itemsSelector = function () {
        var hrefs = _.map($scope.items, function (item) {
            return item.href
          });

        return hrefs.join();
      };

      this.addItem = function (item) {
        $scope.items.push(item);
      };

    }
  };

  return menuDropdown;
}]);
