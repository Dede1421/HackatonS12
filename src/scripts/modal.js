class Modal {
  constructor(element, cbSub = () => {}, cbCancel = () => {}) {
    this.element = element;
    this.buttonClose = this.element.querySelector('.js_modal-close');
    this.buttonCancel = this.element.querySelector('.js_modal-cancel');
    this.buttonSub = this.element.querySelector('.js_modal-sub');

    this.buttonClose.onclick = () => {
      this.close();
    };

    this.buttonSub.onclick = () => {
      cbSub();
      this.close();
    };

    this.buttonCancel.onclick = () => {
      cbCancel();
      this.close();
    };
  }

  open() {
    this.element.classList.add('bg-active');
  }

  close() {
    this.element.classList.remove('bg-active');
  }
}

export default Modal;
