let currentImageIndex = 0;
let images = document.querySelectorAll(".slider-container img");

setInterval(function() {
    images[currentImageIndex].style.opacity=0;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity=1;
}, 5000);