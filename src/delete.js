export const handleDelete = (deleteDivElement) => {
  const deleteKey = deleteDivElement.getAttribute('data-key');
  const deleteTdElement = deleteDivElement.closest('td');
  deleteTdElement.removeChild(deleteDivElement);

  const deleteStoredDataString = localStorage.getItem('userData');
  const deleteStoredData = deleteStoredDataString ? JSON.parse(deleteStoredDataString) : {};
  delete deleteStoredData[deleteKey];
  localStorage.setItem('userData', JSON.stringify(deleteStoredData));
};

export const handleDeleteButtons = () => {
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((button) => {
    button.removeEventListener('click', handleDelete);
    button.addEventListener('click', (event) => {
      const deleteButton = event.target;
      const deleteDivElement = deleteButton.parentElement;
      handleDelete(deleteDivElement);
    });
  });
};
