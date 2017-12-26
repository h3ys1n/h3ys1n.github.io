//          ver for id

// var containerWidth = document.querySelector('#js-slider_03').offsetWidth 
// var ul = document.querySelector('#js-slider_03 ul')
// var li = document.querySelectorAll('.slider__li');
// var dot = document.querySelectorAll(".dot")
// var dots = document.querySelector('.dots')

// var left = document.getElementById('slider-left')
// var right = document.getElementById('slider-right')
// var position = 0

// var activeDot = document.querySelector('#js-banner-menu__item--active')    

// for(var i=0; i< li.length; i++){
//     li[i].style.width = containerWidth + 'px';
//     ul.style.width = li[0].style.width * li.length + 'px'
// }

// dots.onclick = function(event) {
//     var target = event.target;
//     while (target.tagName != 'LI'){
//         target = target.parentNode
//     }
    
//     for (var i=0; i < dot.length ; i++) {
//         if(target.innerHTML == dot[i].innerHTML) {
//             var slidersNumber = i;
//             }
//         dot[i].removeAttribute('id')
//     }
//     target.setAttribute('id', 'js-banner-menu__item--active') 
//     position = -containerWidth*slidersNumber    
//     li[0].style.marginLeft = position + 'px'    
//      console.log(position)   
// }


// left.onclick = function(){
//     position = Math.min(position+containerWidth, 0)
//     li[0].style.marginLeft = position + 'px'
    
//     var activeDot = document.querySelector('#js-banner-menu__item--active')  
//     activeDot.previousElementSibling.setAttribute('id', 'js-banner-menu__item--active')
//     activeDot.removeAttribute('id')
    
// }

// right.onclick = function(){        
//     position = Math.max(position-containerWidth,-containerWidth*(li.length)+containerWidth)
//     li[0].style.marginLeft = position + 'px'
          
//     var activeDot = document.querySelector('#js-banner-menu__item--active')   
//     activeDot.nextElementSibling.setAttribute('id', 'js-banner-menu__item--active')
//     activeDot.removeAttribute('id')

// }

//          ver for classes
var containerWidth = document.querySelector('#js-slider_03').offsetWidth 
var ul = document.querySelector('#js-slider_03 ul')
var li = document.querySelectorAll('.slider__li');
var dot = document.querySelectorAll(".dot")
var dots = document.querySelector('.dots')

var left = document.getElementById('slider-left')
var right = document.getElementById('slider-right')
var position = 0

var activeDot = document.querySelector('.js-banner-menu__item--active')    

// window.onload = function(){
//     window.onresize = function(){
//         console.log('resize slder') 
//         containerWidth = document.querySelector('#js-slider_03').offsetWidth
//         for(var i=0; i< li.length; i++){
//             li[i].style.width = containerWidth + 'px';
//             ul.style.width = li[0].style.width * li.length + 'px'
//         }
//     }
// }

for(var i=0; i< li.length; i++){
    li[i].style.width = containerWidth + 'px';
    ul.style.width = li[0].style.width * li.length + 'px'
}

function nextSlide(){
    position = Math.max(position-containerWidth,-containerWidth*(li.length)+containerWidth)
    li[0].style.marginLeft = position + 'px'
          
    activeDot = document.querySelector('.js-banner-menu__item--active')   
    activeDot.nextElementSibling.classList.add('js-banner-menu__item--active')   
    activeDot.classList.remove('js-banner-menu__item--active')
    
    if (activeDot.nextElementSibling.nextElementSibling == null) right.style.display = 'none'
    left.style.display = 'block'
}

function prevSlide(){
    position = Math.min(position+containerWidth, 0)
    li[0].style.marginLeft = position + 'px'
    
    activeDot = document.querySelector('.js-banner-menu__item--active')  
    activeDot.previousElementSibling.classList.add('js-banner-menu__item--active')
    activeDot.classList.remove('js-banner-menu__item--active')
    
    if (activeDot.previousElementSibling.previousElementSibling == null) left.style.display = 'none'    
    right.style.display = 'block'   
}

dots.onclick = function(event) {
    var slidersNumber,
        target = event.target,
        dotLength = dot.length;
    
        while (target.tagName != 'LI'){
        target = target.parentNode
    }
    
    for (var i=0; i < dotLength ; i++) {
        if(target.innerHTML == dot[i].innerHTML) {
            slidersNumber = i;
            }
        dot[i].classList.remove('js-banner-menu__item--active')
    }
    for (var i=0;i < dotLength;i++) {
        
    }
 
    console.log(slidersNumber)      
    target.classList.add('js-banner-menu__item--active')
    position = -containerWidth*slidersNumber    
    li[0].style.marginLeft = position + 'px'      
    
    left.style.display = 'block'
    right.style.display = 'block'
    
    switch(slidersNumber) {
        case 0: 
            left.style.display = 'none'
            break
        case (dotLength-1) :
            right.style.display = 'none'  
            break      
    }
}


left.onclick = function(){
    prevSlide()
}


right.onclick = function(){
    nextSlide()
}

//      swipe

var swipeStart = {},
swipeStop = {},
swipeThresholds = {
    scrollSupressionThreshold : 10,
    horizontalDistanceThreshold : 30,
    verticalDistanceThreshold : 30,
    durationThreshold : 1000
},

overlayImgSwipe = document.querySelector('#js-slider_03 ul')



ul.addEventListener('touchstart', function(event) {
event.stopPropagation()       
swipeStart = {
    coords: [event.touches[0].clientX, event.touches[0].clientY],
    time: Date.now()
}
})

ul.addEventListener('touchend', function(event) {
event.stopPropagation()        
swipeStop = {
    coords: [event.changedTouches[0].clientX, event.changedTouches[0].clientY],
    time: Date.now()
}
if(swipeStop.time - swipeStart.time < swipeThresholds.durationThreshold &&
    Math.abs( swipeStart.coords[ 0 ] - swipeStop.coords[ 0 ] ) > swipeThresholds.horizontalDistanceThreshold &&
    Math.abs( swipeStart.coords[ 1 ] - swipeStop.coords[ 1 ] ) < swipeThresholds.verticalDistanceThreshold ){
        console.log('swipe')
        swipeStart.coords[0] > swipeStop.coords[ 0 ] ? nextSlide() : prevSlide()            
}            
})