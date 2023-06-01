class Modal {
  constructor() {
    this.tableCells = document.querySelectorAll('td');
    this.modal = document.getElementById('modal');
    this.addEventListeners();
  }

  addEventListeners() {
    this.tableCells.forEach((cell) => {
      cell.addEventListener('click', () => this.openModal(cell.className));
    });
    this.modal.addEventListener('click', () => this.closeModal());
  }

  openModal(className) {
    this.modal.style.display = 'flex';
    this.modal.innerHTML = `
      <div class="modal-content">
        <p>Let us plan you ${className} </p>
      </div>
      `;
  }

  closeModal() {
    this.modal.style.display = 'none';
    // this.modal.innerText = 'exiting';
  }
}

// eslint-disable-next-line no-unused-vars
const modal = new Modal('open-modal', 'close-modal', 'modal');
