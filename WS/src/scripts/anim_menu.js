$(function(){
    const nav = $('.nav')
    const menuItem =$('.menu__item')
    const activeItem = $('.menu__item--active')
    const activeBar = $('#js-activeBar')
    var itemWidth = menuItem.outerWidth();
    var itemHeight = menuItem.outerHeight();
    var itemLeft = activeItem.parent().position().left;

    var itemColor = $('.menu__item').css("color")
    var itemBackgroundColor = $('.menu__item').css("backgroundColor")

    function moveBar (itemLeft, itemWidth, speed){
        activeBar.stop().animate({   
            left: itemLeft+'px',
        }, speed, 'linear')
    }

    if(activeItem.length>0){   
            activeBar.css({
            opacity: 1,
            width: itemWidth + 'px',
            left: itemLeft+'px',
            height: itemHeight + 'px'                                        
        })           
    }


    window.onresize=function(){
        itemWidth = menuItem.outerWidth();
        itemLeft = activeItem.parent().position().left;
        
        if(activeItem.length>0){   
            activeBar.css({
            opacity: 1,
            width: itemWidth + 'px',
            left: itemLeft+'px',
            height: itemHeight + 'px'                                       
        })           
    }
    }

    menuItem.mouseover(function(){
        var itemLeft = $(this).parent().position().left
        moveBar(itemLeft, itemWidth, 100)
        $(this).addClass("js-menu__item--active").css({
            position: "relative",
            backgroundColor: "transparent",
            color: "white",
            zIndex: "2"
            })
        })
    
    menuItem.mouseout(function(){
        var itemLeft = activeItem.parent().position().left
        moveBar(itemLeft, itemWidth, 100)                
        $(this).not('.menu__item--active').removeClass("js-menu__item--active")
               .addClass("js-menu__item--inactive").css({
                backgroundColor: "transparent",
                color: itemColor,
                position: "relative",
                zIndex: "2"                                               
               })               
    })
})