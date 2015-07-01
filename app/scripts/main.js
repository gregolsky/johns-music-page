/* jshint devel:true */

(function ($) {
    'use strict';

    $('a[href^=#]').on('click', function(event) {

        var href = this.href;
        var hashIdx = href.indexOf('#');
        var target = $(href.slice(hashIdx));

        if (target.length) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);

            history.pushState({}, '', href);
        }

    });

})(window.$);
