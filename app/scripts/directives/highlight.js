angular.module('johnsMusicPage')
  .directive('highlight', [
    function () {

      var highlight = {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: 'views/templates/highlight.html'
      };

      return highlight;
  }]);
