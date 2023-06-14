import handleEdit from './modules/edit.js';
import displayStoredData from './modules/display.js';
import { handleDeleteButtons } from './modules/delete.js';
import { dialog, openForm } from './modules/open.js';

// import './styling/div.css';
// import './style.css';

const storedDataString = localStorage.getItem('userData');
const storedData = storedDataString ? JSON.parse(storedDataString) : {};

// Add elements
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('new-task')) {
    dialog.showModal();
    openForm(event.target.previousElementSibling.className, dialog);
  }
});

// Edit elements
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit')) {
    const editButton = event.target;
    const taskElement = event.target.parentElement;
    handleEdit(editButton, taskElement.id);
  }
});

const timeTableTasks = document.querySelectorAll('.sunday, .monday, .tuesday, .wednesday, .thursday, .friday, .saturday');
displayStoredData(timeTableTasks, storedData);

handleDeleteButtons();
