//! Mostrar el header --------------------------------------
let lastScroll = $(window).scrollTop();

$(window).scroll(function() {
    const currentScroll = $(window).scrollTop(); 
    if (currentScroll > lastScroll){
        // scroll down
        $('.header').removeClass().addClass('header header--hidden');
    } else {
        // scroll up
        $('.header').removeClass().addClass('header header--show');

        if (currentScroll == 0){
            $('.header').removeClass().addClass('header');
        }
    }

    // scroll update
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});
//!----------------------------------------------------------

//! slider---------------------------------------------------
$('.slider-banner').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover:false,
    pauseOnDotsHover:true,
});
//!----------------------------------------------------------