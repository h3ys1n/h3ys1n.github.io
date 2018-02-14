document.addEventListener('DOMContentLoaded', function(){
    var windowHeight = window.innerHeight;
    
    document.querySelectorAll('.subtitle').forEach(function(item){
        item.setAttribute('data-animation-name', 'titleLeftMove')
        item.setAttribute('data-animation', 'off')        
    })
    
    var animation = document.querySelectorAll('[data-animation]');

    
    window.onscroll = function(){
    animation.forEach(function(item){
        if(item.getBoundingClientRect().top > 0 
            && item.getBoundingClientRect().top < windowHeight 
            || item.getBoundingClientRect().bottom>0 
            && item.getBoundingClientRect().bottom < windowHeight){
                item.dataset.animation = 'on'                          
        }
        else item.dataset.animation = 'off'
    })
    }
})
