let currentIndex = 0;
const videos = document.querySelectorAll('.carousel video');
const totalVideos = videos.length;
const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

const showNextVideo = () => {
  currentIndex = (currentIndex + 1) % totalVideos;
  updateCarousel();
};

const showPrevVideo = () => {
  currentIndex = (currentIndex - 1 + totalVideos) % totalVideos;
  updateCarousel();
};

const updateCarousel = () => {
  const offset = -currentIndex * 100 + 100;
  carousel.style.transform = `translateX(${offset}%)`;
};

nextButton.addEventListener('click', showNextVideo);
prevButton.addEventListener('click', showPrevVideo);

updateCarousel();
