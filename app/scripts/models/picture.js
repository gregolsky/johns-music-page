angular.module('johnsMusicPage')
    .factory('Picture', [
        function () {
            
            var Picture = function (caption, image) {
                this.caption = caption;
                this.image = image;
            };
            
            return Picture;
        }]);