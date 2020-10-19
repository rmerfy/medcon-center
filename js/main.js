$(document).ready(function () {

    //owl.carousel

    $(".services__carousel").owlCarousel({
        autoplay: true,
        loop: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items: 1,
        center: true,
        margin: 10,
        responsive : {
            1025: {
                items: 2,
                center: false
            }
        }
    });
    var owl = $('.services__carousel');
    owl.owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            960: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

    //menu 

    $('.menu-btn, .menu__link').click(function(e){
        $('.menu-btn, .menu').toggleClass('active');
    });
});