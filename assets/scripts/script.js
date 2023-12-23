const sectionEl = document.querySelector('#img-slider');
const imgsEl = document.querySelectorAll('#img-el');
const btnNextEl = document.querySelector('#btn-next');
const btnPrevEl = document.querySelector('#btn-prev');
const bodyEl = document.querySelector('body');
const imageContainerEl = document.querySelector(".image-container")

// Img control;
let currentImg = 1;

let timeout;

btnNextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout)
  updateImg(imageContainerEl);
  randomRGB(bodyEl);
})

btnPrevEl.addEventListener("click", () => {
  currentImg--
  clearTimeout(timeout)
  updateImg(imageContainerEl);
  randomRGB(bodyEl);
})

// Setting a random number to use in rgba() color;
const randomRGB = (element) => {
  let R = Math.floor(Math.random() * 255);
  let G = Math.floor(Math.random() * 255);
  let B = Math.floor(Math.random() * 255);

  return element.style.backgroundColor = `rgba(${R}, ${G}, ${B}, .5)`;
}
randomRGB(bodyEl);

updateImg();

function updateImg() {

  if(currentImg > imgsEl.length) {
    currentImg = 1;
  } else if(currentImg < 1) {
    currentImg = imgsEl.length;
  }
  
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 600}px)`;

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
    randomRGB(bodyEl);    
  }, 3000)
};


