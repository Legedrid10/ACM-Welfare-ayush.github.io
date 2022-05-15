
(function ($) {

    "use strict";
    $('.navbar-nav .nav-link').click(function () {
      $(".navbar-collapse").collapse('hide');
    });
  
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
  
      if (scroll >= 50) {
        $(".navbar").addClass("sticky-nav");
      } else {
        $(".navbar").removeClass("sticky-nav");
      }
    });
  
    $('#section_1').backstretch([
      "images/slide/bg_2.jpg",
      "images/slide/bg_5.jpg",
      "images/slide/bg_1.jpg"
    ], { duration: 2000, fade: 750 });
  
  })(window.jQuery);



var sectionArray = [1, 2, 3, 4, 5, 6];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top - 80;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('.navbar-nav .nav-item .nav-link').removeClass('active');
             $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
             $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
             $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.navbar-nav .nav-item .nav-link').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 80;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
        
    });
 
    
});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
    
});

