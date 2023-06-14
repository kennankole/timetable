import { handleEdit, handleEditButtons } from './modules/edit.js';
import displayStoredData from './modules/display.js';
import { handleDeleteButtons } from './modules/delete.js';
import { dialog, openCheck } from './modules/open.js';

// import './styling/div.css';
// import './style.css';

const storedDataString = localStorage.getItem('userData');
const storedData = storedDataString ? JSON.parse(storedDataString) : {};

// Add elements
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('new-task')) {
    dialog.showModal();
    const classID = document.querySelector(`.${event.target.previousElementSibling.className}`);
    // console.log('This class ID', classID.id);
    openCheck(dialog, event.target.previousElementSibling.className, classID.id);
  }
});

// Edit elements
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit')) {
    const editButton = event.target;
    const taskElement = event.target.parentElement;
    // console.log('Button element clicked', taskElement.id);
    handleEdit(editButton, taskElement.id);
    dialog.close();
    // handleEditButtons(taskElement.id);
  }
});

const timeTableTasks = document.querySelectorAll('.sunday, .monday, .tuesday, .wednesday, .thursday, .friday, .saturday');
displayStoredData(timeTableTasks, storedData);

handleDeleteButtons();
