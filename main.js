const images = document.querySelectorAll(".image");
const fullImageContainer = document.querySelector(".full-image-container");

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    showFullImage(index);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    showPreviousImage();
  } 
  else if (e.key === "ArrowRight") {
    showNextImage();
  }
});

function showFullImage() {
  fullImageContainer.style.display = "flex";
}

function showPreviousImage(index) {
    index = (index - 1 + images.length) % images.length;
}

function showNextImage(index) {
    index = (index + 1) % images.length;
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