const buttonOpenModal = document.getElementById("btn-open-modal");
const buttonCloseModal = document.getElementById("btn-close-modal");
const modal = document.getElementById("modal");
const fade = document.getElementById("fade");

function inicialize(load) {
    toggleModal().preventDefaul();
}

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[buttonOpenModal, buttonCloseModal, fade].forEach((element) => {
    element.addEventListener("click", () => toggleModal());
})