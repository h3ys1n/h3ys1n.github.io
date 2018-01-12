$(document).ready(function() {
    $('a[href*="#"]').on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top-80
    }, 800);
    e.preventDefault();
    });
 });