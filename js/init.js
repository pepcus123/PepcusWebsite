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
$("#hdpe").on("click", function(){
   shuffleInstance.filter('hdpe');
   $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
});
$("#sprinkle").on("click", function(){
   shuffleInstance.filter('sprinkle');
   $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
});
$("#spray").on("click", function(){
   shuffleInstance.filter('spray');
   $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
});
$("#irrigation").on("click", function(){
   shuffleInstance.filter('irrigation');
   $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
});