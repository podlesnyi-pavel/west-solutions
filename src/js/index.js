const subscribe = document.querySelector('.subscribe__form');
const input = subscribe.querySelector('#input');

subscribe.addEventListener('submit', (e) => {
  e.preventDefault();
  input.value = '';
  input.classList.remove('input--invalid');
});

input.addEventListener('input', () => {
  if (input.value !== '') {
    input.classList.add('input--invalid');
  }

  if (input.value === '') {
    input.classList.remove('input--invalid');
  }
});

const carsBtn = subscribe.querySelector('.offers__btn');

carsBtn.addEventListener('submit', (e) => {
  e.preventDefault();
});
