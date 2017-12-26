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


dots.onclick = function(event) {
    var target = event.target;
    while (target.tagName != 'LI'){
        target = target.parentNode
    }
    
    for (var i=0; i < dot.length ; i++) {
        if(target.innerHTML == dot[i].innerHTML) {
            var slidersNumber = i;
            }
        dot[i].classList.remove('js-banner-menu__item--active')
    }
    target.classList.add('js-banner-menu__item--active')
    position = -containerWidth*slidersNumber    
    li[0].style.marginLeft = position + 'px'      
}


left.onclick = function(){
    position = Math.min(position+containerWidth, 0)
    li[0].style.marginLeft = position + 'px'
    
    var activeDot = document.querySelector('.js-banner-menu__item--active')  
    activeDot.previousElementSibling.classList.add('js-banner-menu__item--active')
    activeDot.classList.remove('js-banner-menu__item--active')
    
}

right.onclick = function(){        
    position = Math.max(position-containerWidth,-containerWidth*(li.length)+containerWidth)
    li[0].style.marginLeft = position + 'px'
          
    var activeDot = document.querySelector('.js-banner-menu__item--active')   
    activeDot.nextElementSibling.classList.add('js-banner-menu__item--active')
    activeDot.classList.remove('js-banner-menu__item--active')

}