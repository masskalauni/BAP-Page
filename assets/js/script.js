
$(document).ready(function () {
  $(".partnrs-slider").slick({
    mobileFirst: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $(".partnrs-slider-prev"),
    nextArrow: $(".partnrs-slider-next"),
    responsive: [
      {
        breakpoint: 300,
        settings: { slidesToShow: 1, slidesToScroll: 1, rows: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, rows: 1 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 3, slidesToScroll: 3, rows: 2 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3, slidesToScroll: 4, rows: 2 },
      },
    ],
  });
});
