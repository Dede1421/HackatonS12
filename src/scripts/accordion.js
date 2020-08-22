class Accordion {
  constructor(element) {
    this.element = element;
  }

  show() {
    this.element.addEventListener('click', () => {
      this.element.classList.toggle('is-open');
      this.hideOrShow();
    });
  }

  hideOrShow() {
    const panelContent = this.element.nextElementSibling;

    if (panelContent.style.maxHeight) {
      panelContent.style.maxHeight = null;
    } else {
      panelContent.style.maxHeight = `${panelContent.scrollHeight}px`;
    }
  }
}

export default Accordion;
