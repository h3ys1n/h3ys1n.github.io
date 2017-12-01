$(function(){
    $('#js-menu-trigger').on('click', function(){
        $(".menu").slideToggle(500)
    });

    $('#js-search-trigger--on').on('click', function(){
        $(this).attr("id", "js-search-trigger--off");             
        $('.nav').animate({marginTop: '30px'}, function(){
            $("#js-search").animate({width: 'toggle'}, function() {
                $('#js-search__button').animate({width: 'toggle'})
            });
        });      
    });
   
    //reverse animation

    $('#js-search-trigger--off').on('click', function() {
        $(this).attr("id", "js-search-trigger--on");             
        $('#js-search__button').animate({width: 'toggle'}, function() {
            $("#js-search").animate({width: 'toggle'}, function() {
                $('.nav').animate({marginTop: '0px'})
            })
        })
    })
})