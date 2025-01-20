function irAIndex() {
    window.location.href = "../../index.html";
}

let index = 0;
const slides = document.querySelectorAll(".slides img");

function showSlide(n) {
    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[index].style.display = "block";
}

function moveSlide(n) {
    showSlide(index += n);
}

// Mostrar la primera imagen al cargar la página
showSlide(index);

// Cambiar automáticamente la imagen cada 3 segundos
setInterval(() => {
    moveSlide(1);
}, 2000);

