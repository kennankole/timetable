const cancelButton = document.getElementById('cancel');
const dialog = document.getElementById('favDialog');
// const form = document.getElementById('form-data');

const openCheck = (dialog, className) => {
  if (dialog.open) {
    document.getElementById('label-text').innerHTML = `Plan your ${className} here`;
  }
};

const tableCells = document.querySelectorAll('td');
tableCells.forEach((cells) => {
  cells.addEventListener('click', () => {
    dialog.showModal();
    openCheck(dialog, cells.className);
  });
});

dialog.returnValue = 'favAnimal';

cancelButton.addEventListener('click', () => {
  dialog.close('animalNotChosen');
  openCheck(dialog);
});

// class Modal {
//   constructor() {
//     this.tableCells = document.querySelectorAll('td');
//     this.modal = document.getElementById('modal');
//     this.addEventListeners();
//   }

//   addEventListeners() {
//     this.tableCells.forEach((cell) => {
//       cell.addEventListener('click', () => this.openModal(cell.className));
//     });
//     this.modal.addEventListener('click', () => this.closeModal());
//   }

//   openModal() {
//     this.modal.style.display = 'flex';
//     this.modal.innerHTML = `
//         <h2>Fill in the details</h2>
//         <form id="myForm">
//           <label for="name">Name:</label>
//           <input type="text" id="name" name="name" required>
//           <br>
//           <label for="email">Email:</label>
//           <input type="emial" id="email" name="email" required>
//           <br>
//           <button type="submit">Submit</button>
//         </form>
//       `;
//     const form = document.getElementById('myForm');
//     form.addEventListener('submit', (e) => this.handleSubmit(e));

//     const formElements = form.querySelector('input, button');
//     formElements.forEach((element) => {
//       element.addEventListener('click', (e) => e.stopPropagation());
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const name = formData.get('name');
//     const email = formData.get('email');

//     console.log(`Name: ${name}, Email: ${email}`);
//     this.closeModal();
//   }

//   closeModal() {
//     this.modal.style.display = 'none';
//     // this.modal.innerText = 'exiting';
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const modal = new Modal();
// });
// // eslint-disable-next-line no-unused-vars
// // const modal = new Modal();
