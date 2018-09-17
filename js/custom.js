$(document).ready(function(e) {
    $(window).load(function () {
        $('.loading').hide();
    });
    $("body").niceScroll({
        cursorcolor:"#c54041",
        cursorborder:"0",
        cursorwidth:"8px"
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
});