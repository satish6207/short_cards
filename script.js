let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
var prevbutton = document.getElementsByClassName('.carousel-control-prev')[0];
var nextbutton = document.getElementsByClassName('.carousel-control-next')[0];
const totalItems = items.length;

function nextSlide() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1;
  }
  updateCarousel();
}

function updateCarousel() {
  const newTransformValue = -currentIndex * 100 + '%';
  document.querySelector('.carousel-inner').style.transform = 'translateX(' + newTransformValue + ')';
}

