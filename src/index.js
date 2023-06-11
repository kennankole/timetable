import { handleEdit, handleEditButtons } from './modules/edit.js';
import displayStoredData from './modules/display.js';
import { handleDeleteButtons } from './modules/delete.js';
import handleSubmitForm from './modules/handleFormSubmit.js';

require('fix-esm').register();

const storedDataString = localStorage.getItem('userData');
const storedData = storedDataString ? JSON.parse(storedDataString) : {};

export const dialog = document.getElementById('popUp');

export const openCheck = (dialog, className) => {
  if (dialog.open) {
    document.getElementById('form-container').innerHTML = `
        <h3 class="form-title">Plan your ${className}</h3>
        <form method="" id="form-data">
          <div class="form-label">
            <label name="task">Task</label>
            <input type="text" placeholder="Enter task..." id="task" required>
          </div>
          <div class="form-label">
            <label name="date">Date</label>
            <input type="date" placeholder="Enter date" id="date" required>
          </div>
          <div class="form-label">
            <label name="time">From</label>
            <input type="time" id="from-time" placeholder="time" required>
          </div>
          <div class="form-label">
            <label name="time">To</label>
            <input type="time" id="to-time" required>
          </div>
          <div class="submit-btns">
            <button type="submit" id="confirm" class="form-btn">Submit</button>
            <button id="cancel" type="reset  class="form-btn">Cancel</button>
          </div>
        </form>
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
