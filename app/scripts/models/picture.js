angular.module('johnsMusicPage')
    .factory('Picture', [
        function () {
            
            var Picture = function (caption, image, thumbnail) {
                this.caption = caption;
                this.image = image;
                this.thumbnail = thumbnail;
            };
            
            return Picture;
        }]);