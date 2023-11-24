const images = document.querySelectorAll(".image");
const fullImageContainer = document.querySelector(".full-image-container");
const fullImage = document.querySelector(".full-image");

let currentIndex = 0;

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentIndex = index;
    showFullImage();
  });
});

document.addEventListener("keydown", (e) => {
  if (fullImageContainer.style.display === "flex") {
    if (e.key === "ArrowLeft") {
      showPreviousImage();
    } else if (e.key === "ArrowRight") {
      showNextImage();
    } else if (e.key === "Escape") {
      hideFullImage();
    }
  }
});

function showFullImage() {
  fullImage.src = images[currentIndex].src;
  fullImageContainer.style.display = "flex";
}

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  fullImage.src = images[currentIndex].src;
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  fullImage.src = images[currentIndex].src;
}

function hideFullImage() {
  fullImageContainer.style.display = "none";
}

//   2
function createBoxes() {
const amount = document.getElementById('boxNumber').value;
const boxesContainer = document.getElementById('boxes');
boxesContainer.innerHTML = '';

for (let i = 0; i < amount; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.backgroundColor = getRandomColor();
  box.style.width = `${30 + i * 10}px`;
  box.style.height = `${30 + i * 10}px`;
  boxesContainer.appendChild(box);
}
}

function destroyBoxes() {
const boxesContainer = document.getElementById('boxes');
boxesContainer.innerHTML = '';
}

function getRandomColor() {
const letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}