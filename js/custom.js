$(document).ready(function(e) {
    $(window).load(function () {
        $('.loading').hide();
    });
   // $(window).scroll(function () {
   //      if ($(this).scrollTop() > 650) {
   //          // $('.scrollup').fadeIn();
   //           $('.scrollup').fadeIn();
   //      } else {
   //          $('.scrollup').fadeOut();
   //          // $('.header-menu').removeClass("change-height");
   //      }
   //  });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            // $('.scrollup').fadeIn();
            // $('.scrollup').fadeIn();
            $('.header-menu').addClass("change-height");
        } else {
            // $('.scrollup').fadeOut();
            $('.header-menu').removeClass("change-height");
        }
    });
    $(window).scroll(function() {
    if ($(this).scrollTop() > 4000 ) {
        $('.scrollup').stop(true, true).fadeIn();
    } else {
        $('.scrollup').stop(true, true).fadeOut();
    }
});
// $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})
    $('.scrollup').click(function () {
        $("html,body,section").animate({
            scrollTop: 0
        }, 1000);
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
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    $("*").css({"cursor":"pointer"});
    }
    //  $('.image-container').on('touchstart touchend', function(e) {
    //     e.preventDefault();
    //      // If event is 'touchend' then...
    //         if (e.type == 'touchend') {
    //             // Ensuring we event prevent default in all major browsers
                 
    //             e.preventDefault ? e.preventDefault() : e.returnValue = false;

    //         }
    //     $(this).toggleClass('.hover');
    // });
     $('.team-container').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('.hover');
    });
    
});


  
