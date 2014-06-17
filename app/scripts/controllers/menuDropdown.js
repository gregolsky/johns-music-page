angular.module('johnsMusicPage')
  .controller('MenuDropdownController', [
    '$scope',
    'scroller',
    '$timeout',
   function ($scope, scroller, $timeout) {

      $scope.items = [];

      $scope.status = { open: false, toggling: false };

      $scope.delayToggle = function ($event, value) {
        $scope.status.toggling = true;
        $timeout(function () {
          $scope.$apply(function() {
            if (!$scope.status.toggling) {
              return;
            }

            $scope.status.toggling = false;
            $scope.status.open = value;
           
          });
        }, 100);

      };
      
      $scope.cancelToggle = function () {
        $scope.status.toggling = false;
      };

      $scope.toggle = function ($event, value) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.open = value;
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
