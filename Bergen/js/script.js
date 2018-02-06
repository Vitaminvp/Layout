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
          pagination: {
                el: '.swiper-pagination',
                clickable: true,
          },
        }
      }
    });
     
});