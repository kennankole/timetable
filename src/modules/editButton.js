const handleEditButtons = (handleEdit) => {
  const editButtons = document.querySelectorAll('.edit');
  editButtons.forEach((button) => {
    button.removeEventListener('click', handleEdit);
    button.addEventListener('click', (event) => {
      const editButton = event.target;
      handleEdit(editButton);
    });
  });
};
export default handleEditButtons;