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
            $('.header-menu').removeClass("change-height");
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({
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



  
