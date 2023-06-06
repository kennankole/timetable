import { dialog, openCheck } from './open.js';

const addElements = () => {
  const addItems = document.querySelectorAll('.plus');
  addItems.forEach((elem) => {
    elem.addEventListener('click', () => {
      dialog.showModal();
      openCheck(dialog, elem.parentElement.className);
    });
  });
};
export default addElements;
