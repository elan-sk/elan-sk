import { GnCarousel } from "../libraries/slick.js";

const SELECTORS = {
  component: ".js-donation_info",
};

const OPTIONS = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  mobileFirst: true,
  centerMode: false,
  variableWidth: false,
};

const sliderInstance = [...document.querySelectorAll(SELECTORS.component)];

if (sliderInstance) {
  sliderInstance.forEach((slider) => {
    const parent = slider.parentElement;
    const slickInstance = new GnCarousel(slider, OPTIONS, parent);

    slickInstance.initCarousel();
  });
}
