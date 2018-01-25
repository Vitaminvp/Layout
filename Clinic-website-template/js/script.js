
	
$('.main_slick').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
      }
    }
  ]
});
	

$('.second_slick').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
	