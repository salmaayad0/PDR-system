// slider
const slider = document.getElementById("slider");
const sliderItems = slider.querySelectorAll(".slider-item");

let currentSlide = 0;

function showSlide(n) {
  sliderItems[currentSlide].classList.remove("active");

  currentSlide = (n + sliderItems.length) % sliderItems.length;

  sliderItems[currentSlide].classList.add("active");
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 3000); // Change slide every 3 seconds