angular.module('johnsMusicPage')
  .controller('MenuDropdownController', [
    '$scope',
    'scroller',
   function ($scope, scroller) {

      $scope.items = [];

      $scope.status = { open: false };

      $scope.toggle = function ($event, value) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.open = value;
        console.log("kj");
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

      $scope.$watch('status.open', function() {
        console.log(arguments);
      });

   }]); 
