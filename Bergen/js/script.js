 $(document).ready(function () {

    var swiper = new Swiper('.swiper-container', {
      speed: 400,
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1024: {
          
          slidesPerView: 2,
          spaceBetween: 0,
//          pagination: {
//                el: '.swiper-pagination',
//                clickable: true,
//          },
        }
      }
    });
     
});

$(window).on('mousemove', function(e){
   var w  = $(window).width();
   var h  = $(window).height();
   var offsetX = 0.5 - e.pageX/w;
   var offsetY = 0.5 - e.pageY/h;
    
   $(".paralax").each(function(i, el){
       var offset = parseInt($(el).data('offset'));
       var translate = "translate3D(" + Math.round(offsetX*offset) + "px," +Math.round(offsetY*offset) + "px, 0px";
       $(el).css({'transform': translate});
   });
});

new WOW().init();