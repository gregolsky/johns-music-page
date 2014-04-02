angular.module('johnsMusicPage')
    .controller('MediaController', [
                    '$scope',
                    '$location',
                    'Picture',
        function ($scope, $location, Picture) {
            
            $scope.popduo = [
                new Picture('Marcin Janek', 'images/Janek4.jpg'),
                new Picture('Michał Bąk', 'images/bak4.jpg'),
                new Picture('Arkadiusz Krawiel', 'images/Krawiel2.jpg'),
                new Picture('? Prosty', 'images/Prosty2.jpg'),
            ];
            
        }]);