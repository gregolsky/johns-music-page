angular.module('johnsMusicPage')
    .controller('MediaController', [
                    '$scope',
                    '$location',
                    'Picture',
        function ($scope, $location, Picture) {
            
            $scope.photos = _.map(new Array(10), function (e, i) {
                return new Picture('Fotka' + i, 'http://lorempixel.com/1280/720/cats?' + i, 'http://lorempixel.com/100/100/cats?' + i );
            });
            
        }]);