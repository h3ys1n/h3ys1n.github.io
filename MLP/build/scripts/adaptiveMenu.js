$(document).ready(function(){
    $('#js-menu-on').on('click', function(){
        $('.nav__fixed').animate({width: 'toggle'})
        $('#js-menu-on').hide()
        $('#js-menu-off').show()
    })
    $('#js-menu-off').on('click', function(){
        $('.nav__fixed').animate({width: 'toggle'})
        $('#js-menu-off').hide()        
        $('#js-menu-on').show()
    })
})