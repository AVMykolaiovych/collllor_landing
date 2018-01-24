$(function() {

    var headerOwlCarousel = $('#headerOwl');
    // Carousel initialization
    headerOwlCarousel.owlCarousel({
        loop: true,
        // autoplay: true,
        autoplayTimeout: 2000,
        dots: false,
        margin: 0,
        animateOut: 'fadeOut',
        items: 1
    });

    var header = $(".header");
    var headerExplore = $(".header__wrapperExplore");
    var headerSearch = $(".header__search");
    var explore = $(".explore");
    var topping = $(".topping");
    var position = header.position();
    $(window).scroll(function() {
        var scrollPosition = explore.height() + topping.height() - header.height();
        var windowposition = $(window).scrollTop();
        if (windowposition >= position.top & windowposition >= header.height()) {
            header.addClass("header__scroll");
            headerSearch.addClass("header__search-responsive");
        } else {
            header.removeClass("header__scroll");
            headerSearch.removeClass("header__search-responsive");
        }
        if (windowposition >= scrollPosition) {
            headerExplore.addClass("explore__scroll");
        } else {
            headerExplore.removeClass("explore__scroll");
        }
    });

    var ham = $('.header__mobile-menu');
    var mobileMenu = $('.header__mobileNav');
    ham.onclick = function () {
        ham.classList.toggle('clicked');
        event.stopPropagation();

        if(mobileMenu.hasClass('open')){
            mobileMenu.removeClass('open');
        } else {
            mobileMenu.addClass('open');
        }
    };

    $(document).click( function(){
        mobileMenu.removeClass('open');
    });
});
