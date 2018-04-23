//меню и конпка 

  $('.menu-trigger').click(function() {
    $('.nav-top .container .menu').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 768 ) {     
      $('.nav-top .container .menu').removeAttr('style');
     }
  });//end resize

		 // навигация
	var headerHeight = $(".nav-top").height();

	    $(".menu").on("click",".navigation", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top;
	        $('body,html').animate({scrollTop: top - headerHeight}, 1000);
	    });

	/*появление элемента при прокрутке страницы*/
	jQuery(function(f){
	    var element = f('#back-top');
	    f(window).scroll(function(){
	        element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](500);           
	    });
	});
	   // кнопка вверх
			 $('.btn-up').click(function () {  
			      $('body, html').animate({
			        scrollTop: 0
			      }, 1000);
			    });




	    //копка показать скрыть

	$(".show-item_left" ).click(function() {
			var hBlock = $('.item-hide_left');
   				$(this).text(hBlock.height() <= 69 ? 'Скрыть' :  'Подробнее');
    				// hBlock.css('height',"auto");
    				if( hBlock.height() <= 69){
    					hBlock.css('height',"auto");
    				}else{
    					hBlock.css('height',"69");
    				}
  
	});

	$( ".show-item_center" ).click(function() {
 		var hBlock = $('.item-hide_center');
  			$(this).text(hBlock.height() <= 69 ? 'Скрыть' :  'Подробнее');
    				// hBlock.css('height',"auto");
    				if( hBlock.height() <= 69){
    					hBlock.css('height',"auto");
    				}else{
    					hBlock.css('height',"69");
    				}
	});

	$( ".show-item_right" ).click(function() {
  		var hBlock = $('.item-hide_right');
  			$(this).text(hBlock.height() <= 69 ? 'Скрыть' :  'Подробнее');
    				// hBlock.css('height',"auto");
    				if( hBlock.height() <= 69){
    					hBlock.css('height',"auto");
    				}else{
    					hBlock.css('height',"69");
    				}
	});