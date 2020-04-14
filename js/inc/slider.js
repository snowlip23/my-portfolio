if ($('.slider').length > 0) {
  $('.slider').slick({
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplaySpeed: 4500,
    accessibility: false,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {}
      }]
  });
};

if ($('.testimonials__slider').length > 0) {
  $('.testimonials__slider').slick({
    infinite: true,
    autoplay: true,
    rtl: true,
    pauseOnHover: true,
    arrows: true,
    dots: false,
    slidesToShow: 2,
    adaptiveHeight: true,
    autoplaySpeed: 6000,
    accessibility: false,
    nextArrow: '<a type="button" class="slick-next"><i class="fas fa-angle-right"></i></a>',
    prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-angle-left"></i></a>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          autoplay: true,
          arrows: true,
          dots: false,
          slidesToShow: 1,
          adaptiveHeight: true,
          autoplaySpeed: 6000,
          accessibility: false,
          nextArrow: '<a type="button" class="slick-next"><i class="fas fa-angle-left"></i></a>',
          prevArrow: '<a type="button" class="slick-prev"><i class="fas fa-angle-right"></i></a>',
        }
      }]
  });
};




