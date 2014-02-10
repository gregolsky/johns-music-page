angular.module('johnsMusicPage')
    .controller('CarouselCtrl', ['$scope',
        function ($scope) {
            'use strict';
            
            $scope.interval = 5000;
            
            var Slide = function (image, title, text) {
                this.image = image;
                this.title = title;
                this.text = text;
            };
            
            var p = 'images/';
            
            $scope.slides = [
                new Slide(
                    'sax',
                    'Wykręcone solówy!',
                    'Wyśmienite bębnienie na odjechanych imprezach. Ostra jazda bez trzymanki.'),
                new Slide(
                    'bells', 
                    'Wyedukujemy twoje dziecko na maxa!', 
                    'Nie tylko na cymbałkach, ale też czarna muza. Noise-core, dzieci kwiaty i cyberpunk!')                
            ];
        
}]);