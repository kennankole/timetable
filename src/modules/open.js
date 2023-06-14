import handleSubmitForm from './handleFormSubmit.js';

export const dialog = document.getElementById('popUp');

export const openCheck = (dialog, className, classID) => {
  if (dialog.open) {
    document.getElementById('form-container').innerHTML = `
        <h3 class="form-title">Plan your ${classID}</h3>
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
            <button id="cancel" type="reset"  class="form-btn">Cancel</button>
          </div>
        </form>
      `;
    const handleSubmit = document.getElementById('form-data');
    console.log('Submitting form', handleSubmit);
    handleSubmit.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSubmitForm(className, dialog);
      dialog.close();
    });

    const cancelButton = document.getElementById('cancel');
    cancelButton.addEventListener('click', () => {
      dialog.close();
      openCheck(dialog, className, classID);
    });
  }
};
