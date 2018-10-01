var Shuffle = window.Shuffle;
var element = document.querySelector('.my-shuffle-container');
var sizer = element.querySelector('.my-sizer-element');

var shuffleInstance = new Shuffle(element, {
  itemSelector: '.gallery_product',
  sizer: sizer // could also be a selector: '.my-sizer-element'
});
// shuffleInstance.filter('animal');
$("#all").on("click", function(){
   shuffleInstance.filter();
      $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
});
$("#goa").on("click", function(){
   shuffleInstance.filter('goa');
   $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
});
$("#independence").on("click", function(){
   shuffleInstance.filter('independence');
   $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
});
$("#diwali").on("click", function(){
   shuffleInstance.filter('diwali');
   $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
});
$("#zumba").on("click", function(){
   shuffleInstance.filter('zumba');
   $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
});
$("#vegabond").on("click", function(){
   shuffleInstance.filter('vegabond');
   $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
});
$("#office").on("click", function(){
   shuffleInstance.filter('office');
   $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
});
$("#seminar").on("click", function(){
   shuffleInstance.filter('seminar');
   $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
});
$("#fun").on("click", function(){
   shuffleInstance.filter('fun');
   $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
});