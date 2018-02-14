(function($) {
$(function() {

  $('ul.tabs-menu').on('click', 'li:not(.selected)', function(e) {
    e.preventDefault();
    $(this).addClass('selected').siblings().removeClass('selected');
    $tabs = $('.tabs-content');
      if($(this).hasClass('g')){
          $tabs.find('div.tabs-content__item').removeClass('selected');
          $tabs.find('div.g').addClass('selected');
      }
      else if($(this).hasClass('w')){
          $tabs.find('div.tabs-content__item').removeClass('selected');
          $tabs.find('div.w').addClass('selected');
      }
      else if($(this).hasClass('b')){
          $tabs.find('div.tabs-content__item').removeClass('selected');
          $tabs.find('div.b').addClass('selected');
      }
      else if($(this).hasClass('v')){
          $tabs.find('div.tabs-content__item').removeClass('selected');
          $tabs.find('div.v').addClass('selected');
      }
      else if($(this).hasClass('p')){
          $tabs.find('div.tabs-content__item').removeClass('selected');
          $tabs.find('div.p').addClass('selected');
      }
      else{
          $tabs.find('div.tabs-content__item').addClass('selected');
      }
      return false;

  });

    
    $('.header-slider, .blockq-slider').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
    });
	  
    $('.portfolio-slider').slick({
      arrows: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      appendArrows: '.portfolio-arrows',
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-caret-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-caret-right"></i></button>'
    });
	
    

    
    
    
    
    
});
})(jQuery);

    function initMap() {
        var coordinates = {lat: 50.471992, lng: 30.510146};
        var  markerImg = "img/girl.png";
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          disableDefaultUI: true,
          scrollwheel: false,
          center: coordinates
        });
        var marker = new google.maps.Marker({
          position: coordinates,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: markerImg
        });
      }
//    function initMap(){
//        var coordinates = {lat: 50.471992, lng: 30.510146};
//        markerImg = "img/girl.png";
//            
//        map = new google.maps.Map(document.getElementById('map'),{
//            center: coordinates,
//            zoom: 16,
//            disableDefaultUI: true,
//            scrollwheel: false,
//        });
//        marker = new google.maps.Marker({
//            position:  coordinates,
//            map: map,
//            animation: google.maps.Animation.DROP,
//            icon: markerImg;
//        });
//    };
//    
//    google.maps.ivent.addDomListener(window, 'load', initMap);