$(function(){
    $('#js-menu-trigger').on('click', function(){
        $(".menu").slideToggle(500)
    });

    $('#js-search-trigger').on('click', function(){
        $("#js-search").animate({width: 'toggle'});
    });
   
})