$(function() {

    var headerOwlCarousel = $('#headerOwl');
    // Carousel initialization
    headerOwlCarousel.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        margin: 0,
        animateOut: 'fadeOut',
        items: 1
    });

});
