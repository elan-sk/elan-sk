import { GnCarousel } from "../libraries/slick.js";

const SELECTORS = {
  component: ".js-timeline",
};

const OPTIONS = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  mobileFirst: true,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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
