$(document).ready(function(){
    $('#js-menu-trigger').on('click', function(){
        $('.nav__fixed').animate({width: 'toggle'})
    })
})