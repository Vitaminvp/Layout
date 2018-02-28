
$(document).ready(function(){

	
	// Слик карусель
    
 $('.slick-slider').slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      appendArrows: '.arrows',
      prevArrow: '<button type="button" class="slick-prev">&#8592; Пред</button>',
      nextArrow: '<button type="button" class="slick-next">След &#8594;</button>',
        responsive: [
    {
      breakpoint: 500,
      settings: {
        arrows: false,
      }
    }
  ]
    });
	
	
	
	$(window).scroll(function (){
        $(' .approach').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+200) {
                $(this).addClass('bounceInUp');
            }
        });
    });
	
	$(window).scroll(function (){
        $(' .img-box').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+200) {
                $(this).addClass('bounceInDown');
            }
        });
    });
});

    