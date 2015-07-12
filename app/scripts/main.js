/* jshint devel:true */

(function (window, $) {
    'use strict';

    function initializeGalleries() {
        $('#popduo-gallery,#trio-gallery,#string-art-ladies-gallery,#quartet-gallery').carousel();
    }

    function getScrollTop(target) {
        return window.pageYOffset + target.getBoundingClientRect().top;
    }

    function initializeAnchorLinks() {
        $('nav a[href^=#], #start a[href^=#]').on('click', function(event) {

            var href = this.href;
            var hashIdx = href.indexOf('#');
            var target = document.querySelector(href.slice(hashIdx));

            if (target) {
                event.preventDefault();

                $('html body').animate({
                    scrollTop: getScrollTop(target)
                }, 1000);

                history.pushState({}, '', href);
                return;
            }

            throw new Error('Invalid element!');

        });
    }

    initializeGalleries();
    initializeAnchorLinks();

})(window, window.$);
