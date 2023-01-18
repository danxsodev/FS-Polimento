const buttonOpenModal = document.getElementById("btn-open-modal");
const buttonCloseModal = document.getElementById("btn-close-modal");
const modal = document.getElementById("modal");
const fade = document.getElementById("fade");

let currentImageIndex = 0;
let images = document.querySelectorAll(".slider-container img");

setInterval(function() {
    images[currentImageIndex].style.opacity=0;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity=1;
}, 5000);

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[buttonOpenModal, buttonCloseModal, fade].forEach((element) => {
    element.addEventListener("click", () => toggleModal());
})

const yearCopyright = document.getElementById("year");
yearCopyright.textContent = new Date().getFullYear();

