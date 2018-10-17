$(document).ready(function(e) {
    $(window).load(function () {
        $('.loading').hide();
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            // $('.scrollup').fadeIn();
            // $('.scrollup').fadeIn();
            $('.header-menu').addClass("change-height");
        } else {
            // $('.scrollup').fadeOut();
            $('.header-menu').removeClass("change-height");
        }
    });
    $(window).scroll(function() {
    if ($(this).scrollTop() > 3000 ) {
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
    $(".team-container").css({"cursor":"pointer"});
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
    //  $('.team-container').on('click', function(e) {
    //     e.preventDefault();
    //     $(this).toggleClass('.hover');
    // });
    
});

var page = document.getElementById('page');
// var sections = page.getElementsByTagName('section');
// This transition can be defined in the CSS if preferred.
var transition = 'top 0.8s ease-in-out 0s';
page.style.transition = transition;
page.onclick = slideDown;

function slideDown(e) {

  // Delegate.
  if (e.target.className != 'next') {
    return;
  }
  
  // Prevent firing simultaneously.
  page.onclick = '';
  self = e.target.parentNode;
  var offset = self.getBoundingClientRect();
  var scroll = self.offsetTop;

  // CSS Transition slide.
  page.style.top = (-offset.height-offset.top) + 'px';

  setTimeout(function () {
    // Reposition the real scrollbar.
    page.style.transition = 'none';
    page.style.top = '';
    window.scrollTo(0, offset.height+scroll);
    page.style.transition = transition;
    // Reattach event.
    page.onclick = slideDown;
    
    // This timeout length should match the CSS animation time (.8s).
  }, 800);
}
  
