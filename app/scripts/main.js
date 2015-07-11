/* jshint devel:true */

(function (window, $) {
    'use strict';

    $(window).on('scroll', function () {
        $('.debug').html(
            'Page Y Offset: ' + window.pageYOffset + '<br/>' +
            '#home top: ' + document.getElementById('home').getBoundingClientRect().top + '<br/>' +
            'calc top: ' + getScrollTop(document.getElementById('home')));
    });

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
