import { handleDeleteButtons } from './delete.js';

export const handleEdit = (editButton, dialog, openCheck) => {
  const editDivElement = editButton.parentElement;
  const editKey = editDivElement.getAttribute('data-key');
  const editTdElement = editDivElement.closest('td');

  const editStoredDataString = localStorage.getItem('userData');
  const editStoredData = editStoredDataString ? JSON.parse(editStoredDataString) : {};

  if (editKey && editStoredData[editKey]) {
    const {
      task, date, fromTime, toTime,
    } = editStoredData[editKey];
    dialog.showModal();
    openCheck(dialog, editTdElement.className);

    document.getElementById('task').value = task;
    document.getElementById('date').value = date;
    document.getElementById('from-time').value = fromTime;
    document.getElementById('to-time').value = toTime;

    const handleSubmit = document.getElementById('form-data');
    const sumbitListener = (event) => {
      event.preventDefault();
      const editedTaskInput = document.getElementById('task').value;
      const editedDateInput = document.getElementById('date').value;
      const editedFromTimeInput = document.getElementById('from-time').value;
      const editedToTimeInput = document.getElementById('to-time').value;

      editStoredData[editKey] = {
        task: editedTaskInput,
        date: editedDateInput,
        fromTime: editedFromTimeInput,
        toTime: editedToTimeInput,
      };

      localStorage.setItem('userData', JSON.stringify(editStoredData));

      const editedDivElement = document.createElement('div');
      editedDivElement.setAttribute('data-key', editKey);
      editedDivElement.innerHTML = `
        <p>Task: ${editedTaskInput}</p>
        <p>Date: ${editedDateInput}</p>
        <p>From: ${editedFromTimeInput}</p>
        <p>To: ${editedToTimeInput}</p>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      `;
      editDivElement.replaceWith(editedDivElement);
      window.location.reload();
      handleDeleteButtons();
      // eslint-disable-next-line no-use-before-define
      handleEditButtons(dialog, openCheck);
    };
    handleSubmit.addEventListener('submit', sumbitListener);
  }
};

export const handleEditButtons = (dialog, openCheck) => {
  const editButtons = document.querySelectorAll('.edit');
  editButtons.forEach((button) => {
    button.removeEventListener('click', handleEdit);
    button.addEventListener('click', (event) => {
      const editButton = event.target;
      handleEdit(editButton, dialog, openCheck);
    });
  });
};
export default handleEdit;
