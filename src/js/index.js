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

const offersBtn = subscribe.querySelector('.offers__btn');

offersBtn.addEventListener('submit', (e) => {
  e.preventDefault();
});
