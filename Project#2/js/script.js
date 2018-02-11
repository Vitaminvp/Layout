$(function(){
   
    $('.block:first').addClass('active');
    $('.block:not(:first) p').hide();
    $('.up_down').click(function(){
      $(this).parents('.block').find('p').slideToggle();
      $(this).parents('.block').toggleClass('active');
    });
     $('.block__header>h4').click(function(){
      $(this).siblings('p').slideToggle();
      $(this).parents('.block').toggleClass('active');
    });
    
    $('.slick').slick({
      prevArrow: '<button type="button" class="slick-prev prev"></button>',
      nextArrow: '<button type="button" class="slick-next next"></button>',
//      autoplay: true,  
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1197,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false

          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
});