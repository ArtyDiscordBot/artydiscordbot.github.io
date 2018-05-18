const background = document.querySelector('.background');
const toggleBody = document.querySelector('.toggle-body');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
  background.classList.toggle('background--on');
  toggleBody.classList.toggle('toggle-body--on');
  toggleBtn.classList.toggle('toggle-btn--on');
  toggleBtn.classList.toggle('toggle-btn--scale');
});