import { GnCarousel } from "../libraries/slick.js";

const SELECTORS = {
  component: ".js-history-timeline",
};

const OPTIONS = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  mobileFirst: true,
  customPaging: (slider, i) => {
    const title = $(slider.$slides[i].innerHTML)
      .find("div[data-year]")
      .data("year");
    return '<a class="history-timeline__year pill-primary"> ' + title + " </a>";
  },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
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
