import handleSubmitForm from './handleFormSubmit.js';
import displayStoredData from '../display.js';

const addNewTask = document.querySelectorAll('.new-task');
const dialog = document.getElementById('popUp');

const openCheck = (dialog, className) => {
  if (dialog.open) {
    document.getElementById('form-container').innerHTML = `
      <div>
        <h1>Plan your </h1>
        <form method="" id="form-data">
          <label name="task">Task</label>
          <input type="text" placeholder="Enter task..." id="task">
          <label name="date">Date:</label>
          <input type="date" placeholder="Enter date" id="date">
          <label name="day">Day:</label>
          <input type="text" placeholder="day" value="">
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
      openCheck(dialog);
    });
    const formContainer = document.getElementById('form-data');
    formContainer.addEventListener('submit', (event) => {
      event.preventDefault();
      handleSubmitForm(dialog, className);
    });
  } else {
    console.log('Dialog closed');
  }
};

addNewTask.forEach((btn) => {
  btn.addEventListener('click', () => {
    dialog.showModal();
    openCheck(dialog, btn.previousElementSibling.className);
  });
});

// const storedDataString = localStorage.getItem('userData');
// const storedData = storedDataString ? JSON.parse(storedDataString) : {};

const timeTableTasks = document.querySelectorAll('.sunday, .monday, .tuesday, .wednesday, .thursday, .friday, .saturday');
displayStoredData(timeTableTasks);