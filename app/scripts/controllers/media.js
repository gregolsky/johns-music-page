angular.module('johnsMusicPage')
    .controller('MediaController', [
                    '$scope',
                    '$location',
                    'Picture',
        function ($scope, $location, Picture) {
            
            $scope.trio = [
                new Picture('Marcin Janek', 'images/standards-sax.jpg'),
                new Picture('Michał Bąk', 'images/standards-bass.jpg'),
                new Picture('Arkadiusz Krawiel', 'images/standards-piano.jpg'),
                new Picture('Jacek Prościński', 'images/standards-drums.jpg'),
            ];

            $scope.popduo = [
                new Picture('Marcin Janek', 'images/popduo-sax.jpg'),
                new Picture('Irek Pestka', 'images/popduo-guitar.jpg')
            ];
            
        }]);
