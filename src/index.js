import { handleEditButtons } from './edit.js';
import displayStoredData from './display.js';

const storedDataString = localStorage.getItem('userData');
const storedData = storedDataString ? JSON.parse(storedDataString) : {};

const tableCells = document.querySelectorAll('td');
displayStoredData(tableCells, storedData);

// tableCells.forEach((cells) => {
//   const tdElement = document.querySelector(`td.${cells.className}`);
//   Object.keys(storedData).forEach((key) => {
//     if (cells.className.startsWith(key.substring(0, 3))) {
//       displayStoredData(tdElement, storedData[key], key);
//     }
//   });
// });

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit')) {
    // const editButton = event.target;
    handleEditButtons();
  }
});