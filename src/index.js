import { handleEdit, handleEditButtons } from './modules/edit.js';
import displayStoredData from './modules/display.js';
import { handleDeleteButtons } from './modules/delete.js';
import handleSubmitForm from './modules/handleFormSubmit.js';
import getRandomColor from './modules/color.js';

const storedDataString = localStorage.getItem('userData');
const storedData = storedDataString ? JSON.parse(storedDataString) : {};

export const dialog = document.getElementById('popUp');

export const openCheck = (dialog, className) => {
  if (dialog.open) {
    document.getElementById('form-container').innerHTML = `
      <div>
        <h1>Plan your ${className}</h1>
        <form method="" id="form-data">
          <label name="task">Task</label>
          <input type="text" placeholder="Enter task..." id="task">
          <label name="date">Date:</label>
          <input type="date" placeholder="Enter date" id="date">
          <label name="day">Day:</label>
          <input type="text" placeholder="day" value="${className}">
          <label name="time">From:</label>
          <input type="time" id="from-time">
          <label name="time">To:</label>
          <input type="time" id="to-time">
          <button type="submit" id="confirm">Confirm</button>
          <button id="cancel" type="reset">Cancel</button>
        </form>
      </div>
    `;
    const cancelButton = document.getElementById('cancel');
    cancelButton.addEventListener('click', () => {
      dialog.close();
      openCheck(dialog, className);
    });

    const handleSubmit = document.getElementById('form-data');
    handleSubmit.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSubmitForm(className, dialog);
    });
  }
};

// Add elements
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('new-task')) {
    dialog.showModal();
    openCheck(dialog, event.target.previousElementSibling.className);
  }
});

// Edit elements
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit')) {
    const editButton = event.target;
    handleEdit(editButton, dialog, openCheck);
    handleEditButtons(dialog, openCheck);
  }
});

const timeTableTasks = document.querySelectorAll('.sunday, .monday, .tuesday, .wednesday, .thursday, .friday, .saturday');
displayStoredData(timeTableTasks, storedData);

handleDeleteButtons();

const tableElements = document.querySelectorAll('.task-elements');
tableElements.forEach((element) => {
  element.style.backgroundColor = getRandomColor();
});