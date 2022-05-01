//! Mostrar el header ------------------------------------------------
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
//!--------------------------------------------------------------------

//! slider--------------------------------------------------------------
$('.js-slider').slick({
    dots: true,
    speed: 1000,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5500,
    pauseOnHover:false,
    pauseOnDotsHover:true,
});
$(".slider-banner").addClass('show-block fadeIn');

setTimeout(() => {
    $(".slider-banner__text-content").addClass('show-block fadeIn');
}, 1000);
//!-------------------------------------------------------------------
 
