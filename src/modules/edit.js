import { handleDeleteButtons } from './delete.js';
import { dialog, openCheck } from './open.js';

export const handleEdit = (editButton) => {
  const editDivElement = editButton.parentElement;
  const editKey = editDivElement.getAttribute('data-key');
  const editTdElement = editDivElement.closest('div');
  const editStoredDataString = localStorage.getItem('userData');
  const editStoredData = editStoredDataString ? JSON.parse(editStoredDataString) : {};

  if (editKey && editStoredData[editKey] && !dialog.open) {
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

      editTdElement.innerHTML = `
        <p>Task: ${editedTaskInput}</p>
        <p>Date: ${editedDateInput}</p>
        <p>Time: ${editedFromTimeInput} - ${editedToTimeInput} </p>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      `;
      handleDeleteButtons();
      // eslint-disable-next-line no-use-before-define
      handleEditButtons();
      dialog.close();
    };
    handleSubmit.addEventListener('submit', sumbitListener);
  }
};

export const handleEditButtons = () => {
  const editButtons = document.querySelectorAll('.edit');
  editButtons.forEach((button) => {
    button.removeEventListener('click', handleEdit);
    button.addEventListener('click', (event) => {
      const editButton = event.target;
      handleEdit(editButton);
    });
  });
};
