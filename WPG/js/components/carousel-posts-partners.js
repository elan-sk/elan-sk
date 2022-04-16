import { GnCarousel } from "../libraries/slick.js";

const SELECTORS = {
  component: ".js-carousel-posts-partners",
};

const OPTIONS = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
  dots: false,
  mobileFirst: true,
  variableWidth: true,
  infinite: false,
  touchMove: true,
  speed: 400,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        variableWidth: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: true,
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
