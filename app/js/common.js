$(function() {

    $('#headerOwl').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        margin: 0,
        animateOut: 'fadeOut',
        items: 1
    });

    $('#videoOwl').owlCarousel({
        items:1,
        nav: true,
        navText: '',
        autoplay: true,
        autoplayTimeout: 3000,
        merge: true,
        loop: true,
        smartSpeed: 700,
        center: true
    });

    $("#stepsOwl").owlCarousel({
        items : 5,
        nav: true,
        navText: '',
        margin: 10,
        slideSpeed : 500,
        smartSpeed: 600,
        dots: false,
        responsiveRefreshRate : 200,
        responsiveClass: true,
        responsive:{
            0:{
                items: 2
            },
            480:{
                items: 3
            },
            767:{
                items: 3
            },
            992:{
                items: 4
            },
            1200:{
                items: 5
            }
        }
    });

    $('#welcomeOwl').owlCarousel({
        items:1,
        // autoplay: true,
        // autoplayTimeout: 3000,
        dots: true,
        merge: true,
        loop: true,
        animateOut: 'fadeOut',
        smartSpeed: 700,
        center: true
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

    // Get the modal
    var modal = document.getElementById('videoModal');
    // Get the button that opens the modal
    var btn = document.getElementById("openButton");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close");
    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    };
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
