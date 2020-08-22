import Dropdown from './dropdown.js';
import Accordion from './accordion.js';
import Modal from './modal.js';

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
  new Dropdown(dropdown).show();
});

const accordions = document.querySelectorAll('.js_accordion');
accordions.forEach((accordion) => {
  new Accordion(accordion).show();
});

const button = document.querySelector('.js_modal-btn');
const modal = new Modal(
  document.querySelector('.js_modal'),
  () => {
    console.log('El usuario se suscribio');
  },
  () => {
    console.log('El usuario no se suscribio');
  },
);

button.addEventListener('click', () => {
  modal.open();
});
