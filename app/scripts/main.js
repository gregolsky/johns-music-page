/* jshint devel:true */

$(function () {

    $("nav a[href^=#]").on('click', function(event) {

        var hashIdx = this.href.indexOf('#');
        var target = $(this.href.slice(hashIdx));

        if( target.length ) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });

});
