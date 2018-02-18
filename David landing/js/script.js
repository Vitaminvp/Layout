
$(function() {
    $('.slick-slider').slick({
      arrows: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
//      appendArrows: '.arrows',
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
//        responsive: [
//            {
//              breakpoint: 1024,
//              settings: {
//                dots: false
//              }
//            }
//        ]
    });
});

    