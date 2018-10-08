$(document).ready(function(e) {
    $(window).load(function () {
        $('.loading').hide();
    });
   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
            $('.header-menu').addClass("change-height");
            // $('body').css("position","absolute");
            // $('body').css("overflow-y","scroll");
            // $('body').css("bottom","0");
            // $('.scrollup').css("display","block");
            // console.log(window.scrollTop);
            // $('body').css("position","absolute");
        } else {
            $('.scrollup').fadeOut();
            // $('body').css("position","static");
            $('.header-menu').removeClass("change-height");
        }
    });
     $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            // $('body').css("position","absolute");
           
        }
    });
    $('.scrollup').click(function () {
        $("html,body,section").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    var scrollLink = $('.scroll');
    
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
    
});



  
