$(function() {
	//SVG Fallback
//	if(!Modernizr.svg) {
//		$("img[src*='svg']").attr("src", function() {
//			return $(this).attr("src").replace(".svg", ".png");
//		});
//	};

	
	
	
	
	
	
	
	$('body, .left-aside').niceScroll({
		horizrailenabled: false,
	});
	
	$(".btn_mnu").click(function() {
		$(this).toggleClass("active");
		$('.left-aside').toggleClass("active");
	});

	
    let images = $(".gallery img");
    let aimages = $(".gallery a");
    lazyload(images);
    
    aimages.hover(function(){
        aimages.css({
            opacity: '0.8',
            WebkitTransition : 'opacity .3s ease-in-out',
            MozTransition    : 'opacity .3s ease-in-out',
            MsTransition     : 'opacity .3s ease-in-out',
            OTransition      : 'opacity .3s ease-in-out',
            transition       : 'opacity .3s ease-in-out'
        });
        $(this).css({'opacity': '1'});
    }, function(){
        aimages.css({'opacity': '1'});
    });
    

    
 	var wall = new Freewall(".gallery");
	wall.reset({
		selector: 'a',
		animate: true,
		cellW: 140,
		cellH: "auto",
		fixSize: 0,
        gutterX : 5,
        gutterY : 5,
		onResize: function() {
			wall.refresh();
		}
	});
	$(".filter-label").click(function() {
		$(".filter-label").removeClass("active");
		var filter = $(this).addClass('active').data('filter');
		if (filter) {
			wall.filter(filter);
		} else {
			wall.unFilter();
		}
	});

    wall.fitWidth();   
	
	
    $(".gallery a").magnificPopup({
        type : 'image',
        preload: [0,2],
        gallery : {
            enabled : true
	},
	removalDelay: 300,
	mainClass: 'mfp-fade'
});
    
    
    
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
			}, 1000);
		});
		return false;
	});

});




















    $(window).on('load', function(){
        $('.preloader').delay(100).fadeOut('slow');
    });

