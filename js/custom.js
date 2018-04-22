//меню и конпка 

  $('.menu-trigger').click(function() {
    $('.nav-top .container .menu').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 768 ) {     
      $('.nav-top .container .menu').removeAttr('style');
     }
  });//end resize