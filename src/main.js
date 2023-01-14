const buttonOpenModal = document.querySelector("#btn-open-modal");
const buttonCloseModal = document.querySelector("#btn-close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[buttonOpenModal, buttonCloseModal, fade].forEach((element) => {
    element.addEventListener("click", () => toggleModal());
})

const yearCopyright = document.getElementById("year");
yearCopyright.textContent = new Date().getFullYear();

