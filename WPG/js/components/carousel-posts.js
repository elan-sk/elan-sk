import { GnCarousel } from "../libraries/slick.js";

const SELECTORS = {
  component: ".js-carousel-posts",
};

const OPTIONS = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  mobileFirst: true,
  infinite: false,
  touchMove: true,
  speed: 400,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
      },
    },
  ],
};

const sliderInstance = [...document.querySelectorAll(SELECTORS.component)];

if (sliderInstance) {
  sliderInstance.forEach((slider) => {
    const parent = slider.parentElement;
    const slickInstance = new GnCarousel(slider, OPTIONS, parent);

    slickInstance.initCarousel();
  });
}
