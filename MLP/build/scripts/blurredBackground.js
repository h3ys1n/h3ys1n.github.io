var blurredElement = document.querySelector("#js-blur")
var blurredBackground = document.querySelector(".signup-background")
blurredBackground.style.backgroundPosition = -blurredElement.left + 'px ' + blurredElement.top + 'px';