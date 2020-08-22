'use-strict';

class Dropdown {
  constructor(element) {
    this.element = element;
  }

  show() {
    this.button = this.element.querySelector('button');

    this.button.addEventListener('click', () => {
      this.element.classList.toggle('on');
    });
  }
}

export default Dropdown;
