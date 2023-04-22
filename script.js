//your code here
const button = document.querySelector('button');
const main = document.querySelector('main');

button.addEventListener('click', function() {
  main.classList.toggle('night');
  button.classList.toggle('button_night');
});

