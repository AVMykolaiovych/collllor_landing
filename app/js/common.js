$(function() {

    var headerOwlCarousel = $('#headerOwl');
    // Carousel initialization
    headerOwlCarousel.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        margin: 0,
        animateOut: 'fadeOut',
        items: 1
    });
    var videoOwlCarousel = $('#videoOwl');
    // Carousel initialization
    videoOwlCarousel.owlCarousel({
        nav: true,
        navText: '',
        slideSpeed : 300,
        paginationSpeed : 400,
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
        var windowWidth = $(document).outerWidth(true);
        if (windowWidth >= 751 & windowposition >= position.top & windowposition >= header.height()) {
            header.addClass("header__scroll");
            headerSearch.addClass("header__search-responsive");
        } else {
            header.removeClass("header__scroll");
            headerSearch.removeClass("header__search-responsive");
        }
        if (windowWidth >= 751 & windowposition >= scrollPosition) {
            headerExplore.addClass("explore__scroll");
        } else {
            headerExplore.removeClass("explore__scroll");
        }
    });

    var mobileButton = $('#mobileNav');
    var mobileMenu = $('.header__mobileNav');
    var bodyMask = $(".body__mask");
    mobileButton.click (function () {

        event.stopPropagation();
        if(mobileMenu.hasClass('open')){
            mobileMenu.removeClass('open');
            bodyMask.removeClass('show');
        } else {
            mobileMenu.addClass('open');
            bodyMask.addClass('show');
        }
    });

    $(document).click( function(){
        mobileMenu.removeClass('open');
        bodyMask.removeClass('show');
    });
});