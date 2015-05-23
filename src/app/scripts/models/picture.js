angular.module('johnsMusicPage')
    .factory('Picture', [
        function () {
            'use strict';

            var Picture = function (caption, image) {
                this.caption = caption;
                this.image = image;
            };

            return Picture;
        }]);