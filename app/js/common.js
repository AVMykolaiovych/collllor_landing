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

    var timeFrame = 15000;
    var owl = $('#welcomeOwl');
    owl.owlCarousel({
        items:1,
        // autoplay: true,
        autoplayTimeout: timeFrame/2,
        dots: true,
        merge: true,
        loop: true,
        animateOut: 'fadeOut',
        smartSpeed: 700,
        center: true
    });


    var lengthWelcomeOwl1 = ($('#welcomeOwl1 .welcomeOwl1__item').length)/2;
    var welcomeOwlCarouselSecond = $('#welcomeOwl1');
    welcomeOwlCarouselSecond.on('initialized.owl.carousel', function () {
        welcomeOwlCarouselSecond.find(".owl-item").addClass("first");
    }).owlCarousel({
        items:1,
        autoplay: true,
        autoplayTimeout: timeFrame/lengthWelcomeOwl1,
        merge: true,
        // loop: true,
        animateOut: 'fadeOut',
        center: true
    });

    var lengthWelcomeOwl2 = ($('#welcomeOwl2 .welcomeOwl1__item').length)/2;
    var welcomeOwlCarouselThird = $('#welcomeOwl2');
    welcomeOwlCarouselThird.on('initialized.owl.carousel', function () {
        welcomeOwlCarouselThird.find(".owl-item").addClass("second");
    }).owlCarousel({
        items:1,
        autoplay: true,
        autoplayTimeout: timeFrame/lengthWelcomeOwl2,
        merge: true,
        // loop: true,
        animateOut: 'fadeOut',
        center: true
    });

    var lengthWelcomeOwl3 = ($('#welcomeOwl3 .welcomeOwl1__item').length)/2;
    var welcomeOwlCarouselFourth = $('#welcomeOwl3');
    welcomeOwlCarouselFourth.on('initialized.owl.carousel', function () {
        welcomeOwlCarouselFourth.find(".welcomeOwl3__item").addClass("owl-item");
    }).owlCarousel({
        items:1,
        autoplay: true,
        autoplayTimeout: timeFrame/lengthWelcomeOwl3,
        merge: true,
        // loop: true,
        animateOut: 'fadeOut',
        center: true
    });

    // var lengthWelcomeOwl4 = ($('#welcomeOwl4 .welcomeOwl1__item').length)/2;
    // $('#welcomeOwl4').owlCarousel({
    //     items:1,
    //     // autoplay: true,
    //     autoplayTimeout: timeFrame/lengthWelcomeOwl4,
    //     merge: true,
    //     // loop: true,
    //     animateOut: 'fadeOut',
    //     center: true
    // });
    //
    // var lengthWelcomeOwl5 = ($('#welcomeOwl5 .welcomeOwl1__item').length)/2;
    // $('#welcomeOwl5').owlCarousel({
    //     items:1,
    //     // autoplay: true,
    //     autoplayTimeout: timeFrame/lengthWelcomeOwl5,
    //     merge: true,
    //     // loop: true,
    //     animateOut: 'fadeOut',
    //     center: true
    // });


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


    var modal = $('#videoModal');
    var btn = $(".video__carousel-box-play-icon");
    var span = $(".close");
    var popUpVideo = $("#popUpVideo");
    btn.click (function (e) {
        e.preventDefault();
        modal.css("display","block");
        popUpVideo.attr("src","img/media/example.mov");
    });
    span.click (function () {
        modal.css("display","none");
        popUpVideo.attr("src","");
    });

    $(window).click( function(event){
        if (event.target === document.getElementById("videoModal")) {
            modal.css("display","none");
            popUpVideo.attr("src","");
        }
    });


    // $(document).ready(function () {
    //     showSlides1();
    // });
    //
    //
    // var slideIndex = 0;
    // function showSlides1() {
    //     var i;
    //     var slides = document.getElementsByClassName("welcomeOwl1");
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) {slideIndex = 1}
    //     slides[slideIndex-1].style.display = "block";
    //     setTimeout(showSlides1, 3000); // Change image every 2 seconds
    //     console.log(slides);
    // }
    // showSlides2();
    // function showSlides2() {
    //     var i;
    //     var slides = document.getElementsByClassName("welcomeOwl2");
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) {
    //         slideIndex = 1
    //     }
    //     slides[slideIndex - 1].style.display = "block";
    //     setTimeout(showSlides2, 2000); // Change image every 2 seconds
    //     console.log(slides);
    // }
    // // showSlides3();
    // function showSlides3() {
    //     var i;
    //     var slides = document.getElementsByClassName("welcomeOwl3");
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) {
    //         slideIndex = 1
    //     }
    //     slides[slideIndex - 1].style.display = "block";
    //     setTimeout(showSlides3, 2000); // Change image every 2 seconds
    //     console.log(slides);
    // }
    // // showSlides4();
    // function showSlides4() {
    //     var i;
    //     var slides = document.getElementsByClassName("welcomeOwl4");
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) {
    //         slideIndex = 1
    //     }
    //     slides[slideIndex - 1].style.display = "block";
    //     setTimeout(showSlides4, 2000); // Change image every 2 seconds
    //     console.log(slides);
    // }
    // showSlides5();
    // function showSlides5() {
    //     var i;
    //     var slides = document.getElementsByClassName("welcomeOwl5");
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) {
    //         slideIndex = 1
    //     }
    //     slides[slideIndex - 1].style.display = "block";
    //     setTimeout(showSlides5, 2000); // Change image every 2 seconds
    //     console.log(slides);
    // }

});
