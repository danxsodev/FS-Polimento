const buttonBurger = document.getElementById('btn-burguer');
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

function openMenu(event) {
    if (event.type === "touchstart") event.preventDefault();

    const nav = document.getElementById("navigation");
    nav.classList.toggle("menu-expanded");

    const menuExpanded = nav.classList.contains("menu-expanded");
    event.currentTarget.setAttribute("aria-expanded", menuExpanded);
    
    if (menuExpanded) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
        buttonBurger.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#EDEDF7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke="#EDEDF7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    } 
    
    else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
        buttonBurger.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="#EDEDF7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 6H21" stroke="#EDEDF7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 18H21" stroke="#EDEDF7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    }
}  
buttonBurger.addEventListener("click", openMenu);
buttonBurger.addEventListener("touchstart", openMenu);

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[buttonOpenModal, buttonCloseModal, fade].forEach((element) => {
    element.addEventListener("click", () => toggleModal());
})

const yearCopyright = document.getElementById("year");
yearCopyright.textContent = new Date().getFullYear();

