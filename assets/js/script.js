
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


$(document).ready(function () {
  $(".counter").each(function () {
      var count = $(this);
      var countTo = count.attr('data-count');
      // console.log(countTo);
      $({ countNum: 0 }).animate({
          countNum: countTo,
      },
          {
              duration: 3000,
              easing: 'linear',
              step: function () {
                  count.text(Math.floor(this.countNum));
              },
              complete: function () {
                  count.text(this.countNum);
              }
          });
  });
});