'use strict';

angular.module('johnsMusicPage')
    .controller('MainCtrl', ['$scope',
        function ($scope) {

  }])
    .controller('CarouselCtrl', ['$scope',
        function ($scope) {

            $scope.interval = 5000;
            
            var Slide = function (img, title, text) {
                this.image = img;
                this.title = title;
                this.text = text;
            };
            
            var p = '../images/';
            
            $scope.slides = [
                new Slide(
                    p +'musical-instrument-245594_1280.jpg', 
                    'Wyedukujemy twoje dziecko na maxa!', 
                    'Nie tylko na cymbałkach, ale też czarna muza. Noise-core, dzieci kwiaty i cyberpunk!'),
                new Slide(
                    p +'guitar-74606.jpg',
                    'Szał!',
                    'Wyśmienite bębnienie na odjechanych imprezach. Ostra jazda bez trzymanki.')
                
            ];
        
}]);