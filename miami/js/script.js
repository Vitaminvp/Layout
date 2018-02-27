
$(document).ready(function(){
//      $("header").mousemove(function(e){
//        var moveX=(e.pageX * -1/20);
//        var moveY=(e.pageY * -1/20);
//        $(this).css("background-position", moveX + "px " +moveY + "px");
//      });
    
    
    //Выпадающее меню
    
    
    $('.menu-btn').click(function(){
        $(this).find('nav').toggle();
    })
    
    
	// Плавная прокрутка к якорям
    
    
	$('a[href^="#"]').click(function(){
		let target = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 800);
	});
	
	$(window).scroll(function(){
        
        if(window.innerWidth > 480){
            let top = $('.header-bottom').offset().top;
            $(window).scroll(function(){
                if( $(window).scrollTop() > top) {
                    $('.header-bottom').addClass('toTop');
                }else{
                    $('.header-bottom').removeClass('toTop');
                }
            });
        }
	});
    
    
    
	// Показать сонтент по клику
    
	$('.gallery-all button').click(function(e){
		e.preventDefault();
		$('.gallery-item').removeClass('hide');
		$(this).remove();
	});
	$('.mymodal').hide().removeClass("hide");
	$('.call').click(function(e){
		e.preventDefault();
		$('.mymodal').fadeIn(200);
	});
	$('.mymodal, .times').click(function(e){
		e.preventDefault();
		if ($(e.target).hasClass('mymodal') || $(e.target).hasClass('times')){
				$('.mymodal').fadeOut(200);
		}
		e.stopPropagation();
	});
	
	// Слик карусель
    
    
	$('.t-items').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: true,
		responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
	  		dots: false
		  }
		},
		{
		  breakpoint: 720,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
	  		dots: false
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
	
});

    