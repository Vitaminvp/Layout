
$(document).ready(function(){
    $('.slick-sl').slick({
      arrows: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
//      appendArrows: '.arrows',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
              breakpoint: 576,
              settings: {
                dots: false
              }
            }
        ]
    });
	$('.togglemenu').click(function(){
        $(this).toggleClass('active'); 
        $('.top-menu').slideToggle(400);
    });
});

    