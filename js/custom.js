$(document).ready(function(){
	
	$(document).ready(function(){
	  $('.menu li a').click(function(){
	    if($(this).parent().hasClass('active')){
	        return false;
	    }
	    $('.menu li').removeClass('active');
	    $(this).parent().addClass('active');
	  });
	});

	//меню и конпка 	
			$('.menu-trigger, .menu li a').click(function() {
				if( $(window).width() < 769) {
				$('.menu').slideToggle(500);
				}
		
  });//end slide toggle
			
	
  
  $(window).resize(function() {   
    if (  $(window).width() >= 768 ) {     
      $('.menu').removeAttr('style');
     }
  });//end resize

		 // навигация
	var headerHeight = $(".nav-top").height();

	    $(".menu").on("click",".navigation", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top;
	        $('body,html').delay(100).animate({scrollTop: top - headerHeight + 20}, 2000);
	    });

	/*появление элемента при прокрутке страницы*/
	jQuery(function(f){
	    var element = f('#back-top');

	    f(window).scroll(function(){
	        element['fade'+ (f(this).scrollTop() > 300 ? 'In': 'Out')](500);           
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
    					hBlock.css({	
    						maxHeight:400,  						
    						transition:"max-height 0.9s"
    							
    					});
    				}else{
    					hBlock.css({
    						maxHeight:69,
    						transition:"max-height 0.5s"
    				});
    				}
  
	});

	$( ".show-item_center" ).click(function() {
 		var hBlock = $('.item-hide_center');
  			$(this).text(hBlock.height() <= 69 ? 'Скрыть' :  'Подробнее');
    				// hBlock.css('height',"auto");
    				if( hBlock.height() <= 69){
    					hBlock.css({	
    						maxHeight:400,  						
    						transition:"max-height 0.9s"
    							
    					});
    				}else{
    					hBlock.css({
    						maxHeight:69,
    						transition:"max-height 0.5s"
    				});
    				}
	});

	$( ".show-item_right" ).click(function() {
  		var hBlock = $('.item-hide_right');
  			$(this).text(hBlock.height() <= 69 ? 'Скрыть' :  'Подробнее');
    				// hBlock.css('height',"auto");
    				if( hBlock.height() <= 69){
    					hBlock.css({	
    						maxHeight:400,  						
    						transition:"max-height 0.9s"
    							
    					});
    				}else{
    					hBlock.css({
    						maxHeight:69,
    						transition:"max-height 0.5s"
    				});
    				}
	});

});

$(document).ready(function(){
	//мигание картинок с текстом
	
		$.fn.swap = function (b) {
			if($(window).width() > 992){
				$(this).each(function(i){
					var b1 = $(b)[i],
					a2 = $(this).clone(),
					b2 = $(b1).clone();

					$(this).fadeOut("slow",function(){
						$(this).replaceWith(b2);
						$(this).fadeIn("slow")
					});
					setTimeout(function(){
						$(b1).fadeOut(function(){
							$(b1).replaceWith(a2);
							$(b1).fadeIn("slow");

						});
					},300)

				});
			}
		};	
				
		setInterval(function(){
			$(".odd").swap($(".even"));
		},15000);

});



// регистрация события загрузки документа.
if (window.addEventListener) window.addEventListener("load", init, false);

// установка обработчиков для форм и элементов форм.
function init() {
	// var button = document.getElementById("buttonIn");
    for (var i = 0; i < document.forms.length; i++) {
        var form = document.forms[i];

        var formValidation = false;

        for (var j = 0; j < form.elements.length; j++) {
            var e = form.elements[j];

            // пропускаем все что не поле ввода.
            if (e.type != "text") {
                continue;
            }

            // проверка имеются ли атрибуты требующие проверки.
            var pattern = e.getAttribute("data-val");

            if (pattern) {
                e.onchange = validateInput; // обработчик на изменение.
                formValidation = true; // форма требует проверку.
            }
        }
        if (formValidation) {
            form.onsubmit = validateForm; // установка обработчика для формы на submit
        }
    }
}

// обработчик на изменение содержимого полей ввода.
function validateInput() {
    var pattern = this.dataset.val,
        msg = this.dataset.valMsg,
        msgId = this.dataset.valMsgId,
        value = this.value;

    var res = value.search(pattern);
    if (res == -1) {
        document.getElementById(msgId).innerHTML = msg;
        this.className = "error";
    }
    else {
        document.getElementById(msgId).innerHTML = "";
        this.className = "valid";
    }
}

// обработчик на submit формы.
function validateForm() {

    var invalid = false;

    for (var i = 0; i < this.elements.length; ++i) {
        var e = this.elements[i];
        if (e.type == "text" && e.onchange != null) {
            e.onchange();
            if (e.className == "error"){
            	invalid = true;
            } 
        }
    }

    if (invalid) {
    	// alert("wataaaaaaa faaaaaaaaaaac")
        // document.getElementById('messegeResult').innerHTML = "<p>Допущены ошибки при заполнении формы.</p>";
        return false;
    } if (invalid == false){
    	jQuery.ajax({
						url:'zakaz.php',
						type: "POST",
						dataType: "html",
						data: jQuery("#formMain").serialize(),
						success: function(response) {
							document.getElementById("messegeResult").innerHTML = response;
						},
						error: function(response) {
							document.getElementById("messegeResult").innerHTML = "<p>Возникла ошибка при отправке формы. Попробуйте еще раз</p>";
						}
					});
		}

    }
