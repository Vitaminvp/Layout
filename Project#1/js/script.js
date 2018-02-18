(function($) {
$(function() {
    

	
	
	
	
	
      $('ul.tabs-menu').on('click',  function(e) {

      return false;

  });

    
    
  $('ul.tabs-menu').on('click', 'li:not(.selected)', function(e) {
//    e.preventDefault();
	$(this).parent().find('li').removeClass('selected');
    $(this).addClass('selected');
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
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-caret-right"></i></button>',
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false
      }
    }
  ]
    });
    
    
    
   $tabs_slider = $('.tabs-menu');
    
    settings = {
        slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-caret-left"></i></button>',
      	nextArrow: '<button type="button" class="slick-next"><i class="fa fa-caret-right"></i></button>',
    }
    
	$(window).on('resize load', function(){
        if($(window).width() > 699){
            if($tabs_slider.hasClass('slick-initialized')){
                $tabs_slider.slick('unslick');
            } return;
        } else if(!$tabs_slider.hasClass('slick-initialize')){
            return $tabs_slider.slick(settings);
        }
    });
    
	
	$tabs_slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
		$current = $(this).find('.slick-current');
		$current.addClass('selected').siblings().removeClass("selected");
			$tabs = $('.tabs-content');
			  if($current.hasClass('g')){
				  $tabs.find('div.tabs-content__item').removeClass('selected');
				  $tabs.find('div.g').addClass('selected');
			  }
			  else if($current.hasClass('w')){
				  $tabs.find('div.tabs-content__item').removeClass('selected');
				  $tabs.find('div.w').addClass('selected');
			  }
			  else if($current.hasClass('b')){
				  $tabs.find('div.tabs-content__item').removeClass('selected');
				  $tabs.find('div.b').addClass('selected');
			  }
			  else if($current.hasClass('v')){
				  $tabs.find('div.tabs-content__item').removeClass('selected');
				  $tabs.find('div.v').addClass('selected');
			  }
			  else if($current.hasClass('p')){
				  $tabs.find('div.tabs-content__item').removeClass('selected');
				  $tabs.find('div.p').addClass('selected');
			  }
			  else{
				  $tabs.find('div.tabs-content__item').addClass('selected');
			  }
			  return false;
	});
	
	
	
    
    
    
    $('.togglemenu').click(function(){
        $(this).toggleClass('active'); 
        $('.topmenu').slideToggle(400);
    });
    
    
    var todo = true;
    
$(window).scroll(function(){
    if(!todo) return false;
    var topPos = $('#clients').offset().top;
    var topWind = $(window).scrollTop();
    if( (topWind > topPos - 200)||$(window).height() + topWind == $(document).height()){
        
        
        $('.client__detail span').each(function(){
            $(this).addClass('visible').prop('counter', 0).animate(
                {
                    counter: $(this).text()
                },
                {
                    duration: 4000,
                    easing: 'swing',
                    step: function(now){
                        $(this).text(Math.ceil(now));
                    }
                });
            }); todo = false;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
//            var my_time = 2;
//            $('.client__detail span').each(function(){
//               $(this).addClass('visible'); 
//               var i=1;
//               var num = $(this).data('num');
//               var step = 1000 * my_time / num;
//               var that = $(this);
//               var int = setInterval(function(){
//                   if(i<=num){
//                       if(num>1000) i+=7;
//                       else i++;
//                       that.html(i);
//
//                   }else{
//                       clearInterval(int);
//                       that.html(num);
//                       todo = false;
//                   }
//               }, step);
//            });
   }
    
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