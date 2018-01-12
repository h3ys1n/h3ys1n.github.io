var img = $(".gallery-box img"),
    lightbox = $(".lightbox"),
    overlay = $(".overlay"),
    prev = $(".gallery .prev"),
    next = $(".gallery .next"),
    overlayImg = $(".overlay__img"),
    imgsSrc,
    imgsIndex,
    galleryAJAX

img.on("click", function(){
    imgsIndex =  img.index( this )    
    console.log(imgsIndex)
    
    //AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../src/scripts/gallery.json', false);
    xhr.send();
    galleryAJAX = JSON.parse(xhr.responseText);

    lightbox.find("img").attr('src', galleryAJAX[imgsIndex])
    console.log(galleryAJAX[0])
    
    // NO AJAX    
    // imgsSrc = $(this).attr('src')
    // lightbox.find("img").attr('src', imgsSrc)
    lightbox.fadeIn()
    overlay.fadeIn()
})

overlay.on("click", function(){
    if($(window).width() > 768){
        $(this).fadeOut()
        lightbox.fadeOut()
    }  
})

function nextImg(){
    if (imgsIndex < img.length-1){
        imgsIndex =imgsIndex + 1   
    }
    else imgsIndex = 0
    imgsSrc = img.eq(imgsIndex).attr('src')
    //AJAX
    lightbox.find("img").attr('src', galleryAJAX[imgsIndex])
    // NO AJAX
    // lightbox.find("img").attr('src', imgsSrc)
}

function prevImg(){
    if (imgsIndex >0){
        imgsIndex =imgsIndex - 1   
    }
    else imgsIndex = img.length-1
    imgsSrc = img.eq(imgsIndex).attr('src')
    lightbox.find("img").attr('src', galleryAJAX[imgsIndex])
    
    // lightbox.find("img").attr('src', imgsSrc)   
}
overlayImg.on('click', function(e){
    e.stopPropagation()
    nextImg()
})

next.on('click', function(e){
    e.stopPropagation()
    nextImg()
})

prev.on('click', function(e){
    e.stopPropagation()
    prevImg()
})

//swipe
var swipeStart = {},
    swipeStop = {},
    swipeThresholds = {
        scrollSupressionThreshold : 10,
        horizontalDistanceThreshold : 30,
        verticalDistanceThreshold : 30,
        durationThreshold : 1000
    },
    overlayImgSwipe = document.querySelector('.overlay__img')


overlayImgSwipe.addEventListener('touchstart', function(event) {
    event.stopPropagation()       
    swipeStart = {
        coords: [event.touches[0].clientX, event.touches[0].clientY],
        time: Date.now()
    }
})
    
overlayImgSwipe.addEventListener('touchend', function(event) {
    event.stopPropagation()        
    swipeStop = {
        coords: [event.changedTouches[0].clientX, event.changedTouches[0].clientY],
        time: Date.now()
    }
    if(swipeStop.time - swipeStart.time < swipeThresholds.durationThreshold &&
        Math.abs( swipeStart.coords[ 0 ] - swipeStop.coords[ 0 ] ) > swipeThresholds.horizontalDistanceThreshold &&
        Math.abs( swipeStart.coords[ 1 ] - swipeStop.coords[ 1 ] ) < swipeThresholds.verticalDistanceThreshold ){
        
            swipeStart.coords[0] > swipeStop.coords[ 0 ] ? nextImg() : prevImg()            
    }            
})