angular.module('johnsMusicPage')
    .controller('MediaController', [
                    '$scope',
                    '$location',
                    'Picture',
        function ($scope, $location, Picture) {
            'use strict';

            $scope.popduo = [
                new Picture('Marcin Janek', 'images/duet-sax.jpg'),
                new Picture('Irek Pestka', 'images/duet-guitar.jpg')
            ];

            $scope.trio = [
                new Picture('Marcin Janek', 'images/trio-sax.jpg'),
                new Picture('Michał Ciesielski', 'images/trio-keys.jpg'),
                new Picture('Michał Bąk', 'images/trio-bass.jpg')
            ];

            $scope.quartet = [
                new Picture('Marcin Janek', 'images/quartet-sax.jpg'),
                new Picture('Michał Bąk', 'images/quartet-bass.jpg'),
                new Picture('Arkadiusz Krawiel', 'images/quartet-piano.jpg'),
                new Picture('Jacek Prościński', 'images/quartet-drums.jpg'),
            ];

            $scope.stringArtLadies = [
                new Picture('String Art Ladies', 'images/string-art-ladies1.jpg'),
                new Picture('String Art Ladies', 'images/string-art-ladies2.jpg'),
                new Picture('String Art Ladies', 'images/string-art-ladies3.jpg'),
                new Picture('String Art Ladies', 'images/string-art-ladies4.jpg')
            ];

        }]);
