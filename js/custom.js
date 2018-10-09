$(document).ready(function(e) {
    $(window).load(function () {
        $('.loading').hide();
    });
   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
            $('.header-menu').addClass("change-height");
        } else {
            $('.scrollup').fadeOut();
            // $('body').css("position","static");
            $('.header-menu').removeClass("change-height");
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
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    $("*").css({"cursor":"pointer"});
    }
     $('.image-container').on('touchstart touchend', function(e) {
        e.preventDefault();
         // If event is 'touchend' then...
            if (e.type == 'touchstart') {
                // Ensuring we event prevent default in all major browsers
                  $(this).toggleClass('.hover');
                e.preventDefault ? e.preventDefault() : e.returnValue = false;

            }
       
    });
    //  $('.team-container').on('click', function(e) {
    //     e.preventDefault();
    //     $(this).toggleClass('.hover');
    // });
    
});


  
