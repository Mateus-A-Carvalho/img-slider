const sectionEl = document.querySelector('#img-slider');
const imgEl = document.querySelectorAll('#img-el');
const btnNextEl = document.querySelector('#btn-next');
const btnPrevEl = document.querySelector('#btn-prev');

// Setting attribute 'src' pictures to each img element;
imgEl.forEach((img) => {
  img.classList.add('slide-left');
});

const plusSlide = (number) => {
  number = btnNextEl.classList.value();
}


