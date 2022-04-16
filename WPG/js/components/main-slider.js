import { GnCarousel } from "../libraries/slick.js";

const SELECTORS = {
  component: ".js-slider",
};

const sliderInstance = [...document.querySelectorAll(SELECTORS.component)];

if (sliderInstance) {
  const OPTIONS = {
    slidesToShow: 1,
    slidesToScroll: 1,
    variableHeight: true,
    arrows: true,
    dots: true,
  };

  sliderInstance.forEach((slider) => {
    const parent = slider.parentElement;
    const slickInstance = new GnCarousel(slider, OPTIONS, parent);

    slickInstance.initCarousel();
  });
}
