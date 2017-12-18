var img = $(".gallery-grid img"),
    lightbox = $(".lightbox"),
    overlay = $(".overlay"),
    prev = $(".gallery .prev"),
    next = $(".gallery .next"),
    overlayImg = $(".overlay__img"),
    imgsSrc,
    imgsIndex

img.on("click", function(){
    imgsIndex =  img.index( this )
    console.log(imgsIndex)  
    imgsSrc = $(this).attr('src')
    lightbox.find("img").attr('src', imgsSrc)
    lightbox.fadeIn()
    overlay.fadeIn()
    // $("body").css({'overflow': 'hidden'})
})

overlay.on("click", function(){
    // console.log("overlsy")
    $(this).fadeOut()
    lightbox.fadeOut()
    $("body").css({'overflow': 'auto'})
    
})

overlayImg.on('click', function(e){
    e.stopPropagation()
    if (imgsIndex < img.length-1){
        imgsIndex =imgsIndex + 1   
    }
    else imgsIndex = 0
    console.log(imgsIndex)
    imgsSrc = img.eq(imgsIndex).attr('src')
    lightbox.find("img").attr('src', imgsSrc)
})

next.on('click', function(e){
    e.stopPropagation()
    if (imgsIndex < img.length-1){
        imgsIndex =imgsIndex + 1   
    }
    else imgsIndex = 0
    console.log(imgsIndex)
    imgsSrc = img.eq(imgsIndex).attr('src')
    lightbox.find("img").attr('src', imgsSrc)
})

prev.on('click', function(e){
    e.stopPropagation()
    if (imgsIndex >0){
        imgsIndex =imgsIndex - 1   
    }
    else imgsIndex = img.length-1
    console.log(imgsIndex)
    imgsSrc = img.eq(imgsIndex).attr('src')
    lightbox.find("img").attr('src', imgsSrc)
})