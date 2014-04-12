angular.module('johnsMusicPage')
  .directive('highlight', [
    function () {

      var highlight = {
        templateUrl: 'views/templates/highlight.html'
      };

      return highlight;
  }]);
