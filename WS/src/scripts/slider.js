var containerWidth = document.querySelector('#js-slider_03').offsetWidth 
var ul = document.querySelector('#js-slider_03 ul')
var li = document.querySelectorAll('.slider__li');
// var li = document.querySelector('li');
var dot = document.querySelectorAll(".dot")
var dots = document.querySelector('.dots')

for(var i=0; i< li.length; i++){
    li[i].style.width = containerWidth + 'px';
    ul.style.width = li[0].style.width * li.length + 'px'
}

dots.onclick = function(event) {
    var target = event.target;
    while (target.tagName != 'LI'){
        target = target.parentNode
    }
    console.log(target)
    
    for (var i=0; i < dot.length ; i++) {
        if(target.innerHTML == dot[i].innerHTML) {
            var pos = i;
            }
        dot[i].removeAttribute('id')
    }
    target.setAttribute('id', 'js-banner-menu__item--active') 
    li[0].style.marginLeft = -containerWidth*(pos) + 'px'

}