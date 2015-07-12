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

    function setupScrollSpy() {

        var links = document.querySelectorAll('nav ul.nav > li > a[href]'),
            latestKnownScrollY = 0,
            spiedElementsCache = {},
            ticking = false;

        Array.prototype.forEach.call(links, function (link) {
            var sel = link.dataset.spy || link.getAttribute('href');
            spiedElementsCache[sel] = document.querySelectorAll(sel);
        });

        function getClientHeight() {
            return window.innerHeight || window.document.documentElement.clientHeight;
        }

        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            var height = getClientHeight();
            var isTooHigh = rect.top < 0 && rect.bottom < 0;
            var isTooLow = rect.top > height && rect.bottom > height;
            return !isTooHigh && !isTooLow;
        }

        var HIGHLIGHT_CLASS = 'active';

        function checkLink(link) {
            var spiedElements = spiedElementsCache[link.dataset.spy || link.getAttribute('href') ];

            var shouldHighlight = Array.prototype.some.call(spiedElements, function (element) {
                return isElementInViewport(element);
            });

            if (shouldHighlight) {
                link.classList.add(HIGHLIGHT_CLASS);
            }
            else {
                link.classList.remove(HIGHLIGHT_CLASS);
            }

            return shouldHighlight;
        }

        function updateScrollSpy() {
            var link, shouldHighlight, clearOthers;
            ticking = false;

            for (var i = 0; i < links.length; i++) {
                link = links[i];
                shouldHighlight = checkLink(link);

                if (shouldHighlight && !clearOthers) {
                    link.classList.add(HIGHLIGHT_CLASS);
                    clearOthers = true;
                }
                else {
                    link.classList.remove(HIGHLIGHT_CLASS);
                }

            }
        }

        function onScroll() {
            latestKnownScrollY = window.scrollY;
            requestTick();
        }

        function requestTick() {
            if(!ticking) {
                requestAnimationFrame(updateScrollSpy);
            }

            ticking = true;
        }

        window.addEventListener('scroll', onScroll);
    }

    function disableHoverOnScroll() {
        var body = document.body,
        timer;

        window.addEventListener('scroll', function() {
            clearTimeout(timer);
            if(!body.classList.contains('disable-hover')) {
                body.classList.add('disable-hover');
            }

            timer = setTimeout(function(){
                body.classList.remove('disable-hover');
            }, 300);
        }, false);

    }

    initializeGalleries();
    initializeAnchorLinks();
    setupScrollSpy();
    disableHoverOnScroll();

})(window, window.$);
