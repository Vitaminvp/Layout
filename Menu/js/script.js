$(function(){
   
    $(".form-input").focus(function(){
        $(this).parent().addClass("focus");
    }).blur(function(){
       if($(this).val() == "") {$(this).parent().removeClass("focus");}
    })
//    $(".button").click(function(){
//        $(".form-input").val("").parent().removeClass("focus");
//    });
    
    
    $('.mymodal').hide().removeClass("hide");
	$('.button').click(function(e){
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
});