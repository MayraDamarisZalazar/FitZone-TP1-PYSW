// Slider en home
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".hero-slider .slide");
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".hero-slider .slide");
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  const slides = document.querySelectorAll(".hero-slider .slide");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.getElementById("btn-next").addEventListener("click", nextSlide);
document.getElementById("btn-prev").addEventListener("click", prevSlide);

// Cambia automáticamente cada 5 segundos
setInterval(nextSlide, 8000);
