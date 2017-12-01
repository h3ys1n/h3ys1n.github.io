$(document).ready(function(){
    
    $('#js-menu-trigger').on('click', function(){
        $(".menu").slideToggle(500)
    });

        
    $('#js-search-trigger').on('click', function(){
        if($(this).is('.js-search-trigger--on')) {
            $('#js-search__button').animate({width: 'toggle'}, function() {
                $("#js-search").animate({width: 'toggle'}, function() {
                    $('.nav').animate({marginTop: '0'})
                })
            })
            $(this).removeClass('js-search-trigger--on');                       
        }
        else {
            $('.nav').animate({marginTop: '30px'}, function(){
                $("#js-search").animate({width: 'toggle'}, function() {
                    $('#js-search__button').animate({ width: 'toggle'})
                })
            })  
            $(this).addClass('js-search-trigger--on');   
        }
    });

})